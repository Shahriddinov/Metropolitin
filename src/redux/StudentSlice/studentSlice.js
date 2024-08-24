
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {addStudent, deleteStudent, getStudent, updateStudent} from "./index";



const initialState = {
    students: [],            // For fetching all students
    postStudent: null,       // For adding a new student
    updateStudent: null,     // For updating a student
    data: [],               // For fetching a single student
    loading: false,         // General loading state
    status: 'idle',         // General status state
    error: null,            // General error state
    limit: 10,              // Pagination limit
    offset: 0,             // Pagination offset
    page: 1,               // Pagination page
};

const studentSlice = createSlice({
    name: 'students',
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

            // Get Students
            .addCase(getStudent.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getStudent.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.students = action.payload.results;
            })
            .addCase(getStudent.rejected, (state, action) => {
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

export const { setLimit, setOffset, setPage } = studentSlice.actions;

export default studentSlice.reducer;