import { createSlice } from '@reduxjs/toolkit';
import { getScience } from './getScienceSlice';

const getScienceSlice = createSlice({
    name: 'scienceList',
    initialState: {
        sciences: [],
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
            .addCase(getScience.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getScience.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.sciences = action.payload.results;
            })
            .addCase(getScience.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch sciences';
            });
    },
});

export const { setLimit, setOffset, setPage } = getScienceSlice.actions;

export default getScienceSlice.reducer;



