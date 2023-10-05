import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface LocationState {
    location: string | null;
}

const initialState: LocationState = {
    location: null,
};

export const locationDroneSlice = createSlice({
    name: 'locationDroneSlice',
    initialState,
    reducers: {
        setLocation: (state, action: PayloadAction<{ location: string }>) => {
            state.location = action.payload.location;
        },
    },
});

export const { setLocation } = locationDroneSlice.actions;

export default locationDroneSlice.reducer;
