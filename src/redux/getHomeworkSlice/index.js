import { createSlice } from '@reduxjs/toolkit';
import {getTask} from "./getHomeworkSlice";

const getHomeworkSlice = createSlice({
    name: 'homeworkSLice',
    initialState: {
        homework: [],
        limit: 2,
        offset: 0,
        page: 1,
        status: 'idle',
        error: null,
    },
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
        builder
            .addCase(getTask.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTask.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.homework = action.payload.results;
            })
            .addCase(getTask.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch homework';
            });
    },
});

export const { setLimit, setOffset, setPage } = getHomeworkSlice.actions;

export default getHomeworkSlice.reducer;



