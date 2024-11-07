import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {addStudent, deleteStudent, getOfferStudent, getOneStudent, updateStudent} from "./index";

const initialState = {
    students: [],          // For fetching all students
    postStudent: null,     // For adding a new student
    updateStudent: null,   // For updating a student
    data: [],              // For fetching a single student
    loading: false,        // General loading state
    status: 'idle',        // General status state
    error: null,           // General error state
    offset: 0,             // Pagination offset (starts at 0)
    totalCount: 0,         // Total count of students
};

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        setStudents: (state, action) => {
            state.students = action.payload.students; // Assuming your response has students
            state.totalCount = action.payload.totalCount; // Ensure you set totalCount here
        },
    },
    extraReducers: (builder) => {
        // Add Student
        builder
            .addCase(addStudent.pending, (state) => {
                state.loading = true;
            })
            .addCase(addStudent.fulfilled, (state, action) => {
                state.loading = false;
                state.postStudent = action.payload;
            })
            .addCase(addStudent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // Update Student
            .addCase(updateStudent.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateStudent.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.updateStudent = action.payload;
            })
            .addCase(updateStudent.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            //get one Student

            .addCase(getOneStudent.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getOneStudent.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.students = action.payload;
            })
            .addCase(getOneStudent.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            // Get Students with Pagination (using limit & offset)
            .addCase(getOfferStudent.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getOfferStudent.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.students = action.payload.results; // Update the students list with new results
                state.totalCount = action.payload.totalCount; // Total number of students
            })
            .addCase(getOfferStudent.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch students';
            })

            // Delete Student
            .addCase(deleteStudent.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteStudent.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.students = state.students.filter(student => student.id !== action.payload);
            })
            .addCase(deleteStudent.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to delete student';
            });
    },
});

export const { setPage } = studentSlice.actions;

export default studentSlice.reducer;
