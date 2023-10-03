import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface LocationState {
    location: string;
}

const initialState: LocationState = {
    location: '',
};

export const locationDroneSlice = createSlice({
    name: 'locationDroneSlice',
    initialState,
    reducers: {
        setLocation: (state, action: PayloadAction<LocationState>) => {
            state.location = action.payload.location;
        },
    },
});

export const { setLocation } = locationDroneSlice.actions;

export default locationDroneSlice.reducer;
