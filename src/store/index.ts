import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { AnyAction, CombinedState, combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistConfig } from 'redux-persist/es/types';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import { RESET_ALL } from './sagas/resetAll';
import bookDroneSlice, { BookingState } from './slices/bookDroneSlice';
import localeSlice, { LocaleState } from './slices/localeSlice';
import locationDroneSlice, { LocationState } from './slices/locationDroneSlice';
import selectDateSlice, { DateState } from './slices/selectDateSlice';

const persistConfig: PersistConfig<any> = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['selectDate', 'locationDrone', 'bookDrone'],
    version: 1,
};

const combinedReducer = combineReducers({
    locale: localeSlice,
    bookDrone: bookDroneSlice,
    locationDrone: locationDroneSlice,
    selectDate: selectDateSlice,
});

const reducers = (
    state:
        | CombinedState<{
              locale: LocaleState;
              bookDrone: BookingState;
              locationDrone: LocationState;
              selectDate: DateState;
          }>
        | undefined,
    action: AnyAction,
) => {
    if (action.type === RESET_ALL) {
        // for all keys defined in your persistConfig(s)
        AsyncStorage.removeItem('persist:root');
        // storage.removeItem('persist:otherKey')

        return combinedReducer(undefined, action);
    }

    return combinedReducer(state, action);
};

const persistReducers = persistReducer(persistConfig, reducers);

// create our new saga monitor
const sagaMiddleware = createSagaMiddleware({});

const middleware = [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
];

export const store = configureStore({
    reducer: persistReducers,
    middleware,
    enhancers: [],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
