import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export interface DateState {
    date: string | null;
    startTime: string | null;
    endTime: string | null;
}

const initialState: DateState = {
    date: dayjs().format('YYYY-MM-DD'),
    startTime: dayjs().format('HH:mm'),
    endTime: dayjs().add(3, 'hour').format('HH:mm'),
};

export const selectDateSlice = createSlice({
    name: 'selectDateSlice',
    initialState,
    reducers: {
        setDate: (state, action: PayloadAction<{ date: string }>) => {
            state.date = action.payload.date;
        },
        setStartTime: (state, action: PayloadAction<{ time: string }>) => {
            state.startTime = action.payload.time;
        },
        setEndime: (state, action: PayloadAction<{ time: string }>) => {
            state.endTime = action.payload.time;
        },
    },
});

export const { setDate, setStartTime, setEndime } = selectDateSlice.actions;

export default selectDateSlice.reducer;
