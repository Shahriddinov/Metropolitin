import { createSlice } from '@reduxjs/toolkit';
import {addTask} from "./AddHomeworkSlice";


const taskSlice = createSlice({
    name: 'addTask',
    initialState: {
        status: 'idle',
        loading: false,
        error: null,
        tasks: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addTask.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = action.payload; // Update libraryItems with the payload
                state.status = 'succeeded'; // Optionally update status
            })
            .addCase(addTask.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.status = 'failed'; // Optionally update status
            });
    },
});

export default taskSlice.reducer;
