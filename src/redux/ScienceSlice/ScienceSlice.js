import { createSlice } from '@reduxjs/toolkit';
import {
    addSciences,
    updateScience,
    getAllScience,
    getScience,
    deleteScience
} from './index'; // Adjust the import path as necessary

const initialState = {
    scienceList: [],           // For fetching all sciences
    postScience: null,        // For adding a new science
    updateScience: null,      // For updating a science
    data: [],                 // For fetching a single science
    loading: false,           // General loading state
    status: 'idle',           // General status state
    error: null,              // General error state
    limit: 2,                 // Pagination limit for getScience
    offset: 0,                // Pagination offset for getScience
    page: 1,                  // Pagination page for getScience
};

const scienceSlice = createSlice({
    name: 'science',
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
            // Add Science
            .addCase(addSciences.pending, (state) => {
                state.loading = true;
            })
            .addCase(addSciences.fulfilled, (state, action) => {
                state.loading = false;
                state.postScience = action.payload;
            })
            .addCase(addSciences.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // Update Science
            .addCase(updateScience.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateScience.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.updateScience = action.payload;
            })
            .addCase(updateScience.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            // Get All Sciences
            .addCase(getAllScience.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllScience.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.scienceList = action.payload.results; // Ensure this matches the structure of your response
            })
            .addCase(getAllScience.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch sciences';
            })

            // Get Science
            .addCase(getScience.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getScience.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(getScience.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch science';
            })

            // Delete Science
            .addCase(deleteScience.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteScience.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.scienceList = state.scienceList.filter(science => science.id !== action.meta.arg);
            })
            .addCase(deleteScience.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to delete science';
            });
    },
});

export const { setLimit, setOffset, setPage } = scienceSlice.actions;

export default scienceSlice.reducer;
