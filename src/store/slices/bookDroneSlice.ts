import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface BookingState {
    specialiation: string;
}

const initialState: BookingState = {
    specialiation: 'en',
};

export const bookDroneSlice = createSlice({
    name: 'bookDroneSlice',
    initialState,
    reducers: {
        setBooking: (state, action: PayloadAction<BookingState>) => {
            state.specialiation = action.payload.specialiation;
        },
    },
});

export const { setBooking } = bookDroneSlice.actions;

export default bookDroneSlice.reducer;
