import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// Assuming you have these thunks defined somewhere
import {addLibrary, deleteLibrary, updateLibrary, getLibraryAll, getOfferLibraryAll} from './index';

// Initial State
const initialState = {
    libraryItems: [],
    library: null,
    updateLibrary: null,
    offset: 0,             // Pagination offset (starts at 0)
    totalCount: 0,         // Total count of students
    status: 'idle',
    loading: false,
    error: null,
};

// Create a unified slice
const librarySlice = createSlice({
    name: 'library',
    initialState,
    reducers: {
        setLibrary: (state, action) => {
            state.students = action.payload.students; // Assuming your response has students
            state.totalCount = action.payload.totalCount; // Ensure you set totalCount here
        },
    },
    extraReducers: (builder) => {
        builder
            // Add TeacherLibrary Cases
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

            // Delete TeacherLibrary Cases
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

            // Update TeacherLibrary Cases
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
            })
            //get Offer Library

            .addCase(getOfferLibraryAll.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getOfferLibraryAll.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.libraryItems = action.payload.results;
                state.totalCount = action.payload.totalCount;
            })
            .addCase(getOfferLibraryAll.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });

    },
});

// Export actions and reducer
export const {setPage} = librarySlice.actions;

export default librarySlice.reducer;
