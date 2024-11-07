import {createSlice} from '@reduxjs/toolkit';
import {addTeachers, deleteTeacher, getOneTeachers, getTeacher, getTeachers, updateTeacher} from "./index";

const initialState = {
    teachers: [],            // For fetching all teachers
    postTeacher: null,       // For adding a new teacher
    updateTeacher: null,     // For updating a teacher
    singleTeacher: null,     // For fetching a single teacher
    teachersAll: null,     // For fetching a all teacher
    loading: false,          // General loading state
    status: 'idle',          // General status state
    error: null,             // General error state
    limit: 20,             // Pagination limit
    offset: 0,             // Pagination offset (starts at 0)
    totalCount: 0,         // Total count of students
};

const teacherSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {

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
            });

        // Update Teacher
        builder
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
            });
        // Get One Teacher (Separate action types)
        builder
            .addCase(getOneTeachers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getOneTeachers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.singleTeacher = action.payload;
            })
            .addCase(getOneTeachers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });


        // Get Limit Teachers (Correct action types)
        builder
            .addCase(getTeacher.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTeacher.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.teachers = action.payload.results;
                state.totalCount = action.payload.totalCount; // Total number of students

            })
            .addCase(getTeacher.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch teachers';
            });
        // Get All Teachers (Correct action types)
        builder
            .addCase(getTeachers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTeachers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.teachersAll = action.payload.results;
            })
            .addCase(getTeachers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch teachers';
            });


        // Delete Teacher
        builder
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

export const { setPage} = teacherSlice.actions;

export default teacherSlice.reducer;
