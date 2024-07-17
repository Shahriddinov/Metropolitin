import { createSlice } from '@reduxjs/toolkit';
import { getGroup } from './getGroupSlice';

const getGroupSlice = createSlice({
    name: 'groupList',
    initialState: {
        groups: [],
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
            .addCase(getGroup.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getGroup.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.groups = action.payload.results;
            })
            .addCase(getGroup.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch groups';
            });
    },
});

export const { setLimit, setOffset, setPage } = getGroupSlice.actions;

export default getGroupSlice.reducer;



