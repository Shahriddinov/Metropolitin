import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Assuming you have these thunks defined somewhere
import { addLibrary, deleteLibrary, updateLibrary,  getLibraryAll } from './index';

// Initial State
const initialState = {
    libraryItems: [],
    library: null,
    updateLibrary: null,
    limit: 30,
    offset: 0,
    page: 1,
    status: 'idle',
    loading: false,
    error: null,
};

// Create a unified slice
const librarySlice = createSlice({
    name: 'library',
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
        builder
            // Add Library Cases
            .addCase(addLibrary.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addLibrary.fulfilled, (state, action) => {
                state.loading = false;
                state.libraryItems = action.payload;
                state.status = 'succeeded';
            })
            .addCase(addLibrary.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.status = 'failed';
            })

            // Delete Library Cases
            .addCase(deleteLibrary.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteLibrary.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.libraryItems = state.libraryItems.filter(library => library.id !== action.meta.arg);
            })
            .addCase(deleteLibrary.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            // Update Library Cases
            .addCase(updateLibrary.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateLibrary.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.updateLibrary = action.payload;
            })
            .addCase(updateLibrary.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })



            // Get All Libraries Cases
            .addCase(getLibraryAll.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getLibraryAll.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.libraryItems = action.payload.results;
            })
            .addCase(getLibraryAll.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

// Export actions and reducer
export const { setLimit, setOffset, setPage } = librarySlice.actions;

export default librarySlice.reducer;
