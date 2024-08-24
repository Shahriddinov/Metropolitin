import { createSlice } from '@reduxjs/toolkit';
import {
    addSchedule,
    deleteSchedule,
    updateSchedule,
    getSchedule,
    getScheduleAll,
} from './index'; // Adjust the import path as necessary

const initialState = {
    schedules: [],           // For fetching all schedules
    postSchedule: null,      // For adding a new schedule
    updateSchedule: null,    // For updating a schedule
    data: [],                // For fetching a single schedule
    loading: false,          // General loading state
    status: 'idle',          // General status state
    error: null,             // General error state
    limit: 2,                // Pagination limit
    offset: 0,               // Pagination offset
    page: 1,                 // Pagination page
};

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
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
            // Add Schedule
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
            })

            // Delete Schedule
            .addCase(deleteSchedule.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteSchedule.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = state.data.filter(schedule => schedule.id !== action.meta.arg);
            })
            .addCase(deleteSchedule.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            // Update Schedule
            .addCase(updateSchedule.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateSchedule.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.updateSchedule = action.payload;
            })
            .addCase(updateSchedule.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            // Get Single Schedule
            .addCase(getSchedule.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getSchedule.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(getSchedule.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch schedule';
            })

            // Get All Schedules
            .addCase(getScheduleAll.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getScheduleAll.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.schedules = action.payload.results;
            })
            .addCase(getScheduleAll.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { setLimit, setOffset, setPage } = scheduleSlice.actions;

export default scheduleSlice.reducer;
