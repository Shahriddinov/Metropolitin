import { createSlice } from '@reduxjs/toolkit';
import {getLibrary} from "./getLibrarySlice";

const getLibrarySlice = createSlice({
    name: 'libraryList',
    initialState: {
        librarys: [],
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
            .addCase(getLibrary.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getLibrary.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.librarys = action.payload.results;
            })
            .addCase(getLibrary.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch library';
            });
    },
});

export const { setLimit, setOffset, setPage } = getLibrarySlice.actions;

export default getLibrarySlice.reducer;



