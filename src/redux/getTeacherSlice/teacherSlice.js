import {createSlice} from "@reduxjs/toolkit";
import {getTeachers} from "./getTeacherSlice";

const teacherSlice = createSlice({
    name: 'teachers',
    initialState: {
        teacher: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTeachers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTeachers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.teacher = action.payload.results; // Ensure this matches the structure of your response
            })
            .addCase(getTeachers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default teacherSlice.reducer;