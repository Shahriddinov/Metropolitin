
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {addTeachers} from "./teacherSlice";




const initialState = {
    loading: false,
    error: null,
    postTeacher: null,
};

const teacherSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addTeachers.pending, (state) => {
                state.loading = true;
            })
            .addCase(addTeachers.fulfilled, (state, action) => {
                state.loading = false;
                state.postTeacher = action.payload;
            })
            .addCase(addTeachers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default teacherSlice.reducer;
