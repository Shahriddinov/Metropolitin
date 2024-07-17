import { createSlice } from '@reduxjs/toolkit';
import { addLibrary } from './librarySlice';

const librarySlice = createSlice({
    name: 'library',
    initialState: {
        status: 'idle',
        loading: false,
        error: null,
        libraryItems: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addLibrary.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addLibrary.fulfilled, (state, action) => {
                state.loading = false;
                state.libraryItems = action.payload; // Update libraryItems with the payload
                state.status = 'succeeded'; // Optionally update status
            })
            .addCase(addLibrary.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.status = 'failed'; // Optionally update status
            });
    },
});

export default librarySlice.reducer;
