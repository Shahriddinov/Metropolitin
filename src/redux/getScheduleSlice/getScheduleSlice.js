import { createSlice } from '@reduxjs/toolkit';
import {getSchedule} from "./index";

const getScheduleSlice = createSlice({
    name: 'scheduleList',
    initialState: {
        schedules: [],
        limit: 2,
        offset: 0,
        page: 1,
        status: 'idle',
        error: null,
    },
    reducers: {
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        setOffset: (state, action) => {
            state.offset = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
            state.offset = (action.payload - 1) * state.limit;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSchedule.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSchedule.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.schedules = action.payload.results;
            })
            .addCase(getSchedule.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch library';
            });
    },
});

export const { setLimit, setOffset, setPage } = getScheduleSlice.actions;

export default getScheduleSlice.reducer;



