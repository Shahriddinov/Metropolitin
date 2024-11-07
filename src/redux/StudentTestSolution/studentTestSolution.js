import { createSlice } from '@reduxjs/toolkit';
import {studentTestSolution} from "./index";

const initialState = {
    postStudentTest: [],
    loading: false,
    status: 'idle',

};

const studentSolutionTestSlice = createSlice({
    name: 'studentTest',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add Teacher
        builder
            .addCase(studentTestSolution.pending, (state) => {
                state.loading = true;
            })
            .addCase(studentTestSolution.fulfilled, (state, action) => {
                state.loading = false;
                state.postStudentTest = action.payload;
            })
            .addCase(studentTestSolution.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
});



export default studentSolutionTestSlice.reducer;