import {createSlice} from "@reduxjs/toolkit";
import {getScheduleAll} from "./index";

const allSchedule = createSlice({
    name: 'schedules',
    initialState: {
        schedules: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getScheduleAll.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getScheduleAll.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.schedules = action.payload.results; // Ensure this matches the structure of your response
            })
            .addCase(getScheduleAll.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default allSchedule.reducer;