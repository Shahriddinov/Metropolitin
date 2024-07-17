
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {addSchedule} from "./addScheduleSlice";


const initialState = {
    loading: false,
    error: null,
    postSchedule: null,
};

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addSchedule.pending, (state) => {
                state.loading = true;
            })
            .addCase(addSchedule.fulfilled, (state, action) => {
                state.loading = false;
                state.postSchedule = action.payload;
            })
            .addCase(addSchedule.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default scheduleSlice.reducer;
