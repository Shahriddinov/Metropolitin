import { createSlice } from '@reduxjs/toolkit';
import {getDocument} from "./getDocumentSlice";

const getDocumentSlice = createSlice({
    name: 'scienceList',
    initialState: {
        documents: [],
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
            .addCase(getDocument.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getDocument.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.documents = action.payload.results;
            })
            .addCase(getDocument.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch sciences';
            });
    },
});

export const { setLimit, setOffset, setPage } = getDocumentSlice.actions;

export default getDocumentSlice.reducer;



