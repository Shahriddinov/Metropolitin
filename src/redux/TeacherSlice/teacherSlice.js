import { createSlice } from '@reduxjs/toolkit';
import {addTeachers, deleteTeacher, getTeachers, updateTeacher} from "./index";

const initialState = {
    teachers: [],            // For fetching all teachers
    postTeacher: null,       // For adding a new teacher
    updateTeacher: null,     // For updating a teacher
    data: [],                // For fetching a single teacher
    loading: false,          // General loading state
    status: 'idle',          // General status state
    error: null,             // General error state
    limit: 10,               // Pagination limit
    offset: 0,              // Pagination offset
    page: 1,                // Pagination page
};

const teacherSlice = createSlice({
    name: 'teachers',
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
        // Add Teacher
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
            })

            // Update Teacher
            .addCase(updateTeacher.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateTeacher.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.updateTeacher = action.payload;
            })
            .addCase(updateTeacher.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            // Get Teachers
            .addCase(getTeachers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTeachers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.teachers = action.payload.results;
            })
            .addCase(getTeachers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch teachers';
            })

            // Delete Teacher
            .addCase(deleteTeacher.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteTeacher.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.teachers = state.teachers.filter(teacher => teacher.id !== action.payload);
            })
            .addCase(deleteTeacher.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to delete teacher';
            });
    },
});

export const { setLimit, setOffset, setPage } = teacherSlice.actions;

export default teacherSlice.reducer;