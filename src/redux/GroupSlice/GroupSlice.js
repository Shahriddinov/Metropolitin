import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addGroups, deleteGroup, getAllGroups, updateGroup } from './index'; // Ensure all these imports are correctly pointing to your thunks

// Initial state for the combined group slice
const initialState = {
    loading: false,
    error: null,
    postGroup: null, // For adding a group
    allGroups: [],   // For fetching all groups
    updateGroup: null, // For updating a group
    status: 'idle',  // For managing the global status
    deleteStatus: 'idle', // Separate status for delete operations if needed
};

// Create a single combined slice
const groupSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Handling addGroups actions
        builder
            .addCase(addGroups.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addGroups.fulfilled, (state, action) => {
                state.loading = false;
                state.postGroup = action.payload;
            })
            .addCase(addGroups.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        // Handling deleteGroup actions
        builder
            .addCase(deleteGroup.pending, (state) => {
                state.deleteStatus = 'loading';
                state.error = null;
            })
            .addCase(deleteGroup.fulfilled, (state, action) => {
                state.deleteStatus = 'succeeded';
                state.allGroups = state.allGroups.filter(group => group.id !== action.meta.arg);
            })
            .addCase(deleteGroup.rejected, (state, action) => {
                state.deleteStatus = 'failed';
                state.error = action.payload;
            });

        // Handling getAllGroups actions
        builder
            .addCase(getAllGroups.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getAllGroups.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.allGroups = action.payload.results; // Make sure this matches your API response
            })
            .addCase(getAllGroups.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });

        // Handling updateGroup actions
        builder
            .addCase(updateGroup.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(updateGroup.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.updateGroup = action.payload;

                // Update the allGroups list with the updated group
                state.allGroups = state.allGroups.map(group =>
                    group.id === action.payload.id ? action.payload : group
                );
            })
            .addCase(updateGroup.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default groupSlice.reducer;
