import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface LocaleState {
    date: string | null;
    startTime: string | null;
    endTime: string | null;
}

const initialState: LocaleState = {
    date: null,
    startTime: null,
    endTime: null,
};

export const selectDateSlice = createSlice({
    name: 'selectDateSlice',
    initialState,
    reducers: {
        setDate: (state, action: PayloadAction<LocaleState>) => {
            state.date = action.payload.date;
        },
    },
});

export const { setDate } = selectDateSlice.actions;

export default selectDateSlice.reducer;
