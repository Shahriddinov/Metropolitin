import { createSlice} from '@reduxjs/toolkit';
import {addTask, getTask} from "./index";



const HomeworkSlice = createSlice({
    name: 'main',
    initialState: {
        // State for tasks
        tasks: null,
        taskLoading: false,
        taskError: null,
        // State for homework
        homework: [],
        homeworkStatus: 'idle',
        homeworkError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // Handlers for addTask
        builder
            .addCase(addTask.pending, (state) => {
                state.taskLoading = true;
                state.taskError = null;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.taskLoading = false;
                state.tasks = action.payload; // Update tasks with the payload
                state.taskStatus = 'succeeded';
            })
            .addCase(addTask.rejected, (state, action) => {
                state.taskLoading = false;
                state.taskError = action.error.message;
                state.taskStatus = 'failed';
            });

        // Handlers for getTask
        builder
            .addCase(getTask.pending, (state) => {
                state.homeworkStatus = 'loading';
            })
            .addCase(getTask.fulfilled, (state, action) => {
                state.homeworkStatus = 'succeeded';
                state.homework = action.payload.results;
            })
            .addCase(getTask.rejected, (state, action) => {
                state.homeworkStatus = 'failed';
                state.homeworkError = action.error.message || 'Failed to fetch homework';
            });
    },
});


export default HomeworkSlice.reducer;