import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDocuments, deleteDocument,getDocument, updateDocument } from './index';

// Initial state
const initialState = {
    documents: [], // Combined documents list
    postDocuments: null, // Holds the last added document
    offset: 0,             // Pagination offset (starts at 0)
    totalCount: 0,         // Total count of students
    status: 'idle', // Status for getDocument
    loading: false, // Loading state for add, delete, update actions
    error: null, // Error message
};

// Create the combined slice
const documentSlice = createSlice({
    name: 'GetDocument',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Handling getDocument actions
        builder
            .addCase(getDocument.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getDocument.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.documents = action.payload.results;
                state.totalCount = action.payload.totalCount;
            })
            .addCase(getDocument.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch documents';
            });

        // Handling addDocuments actions
        builder
            .addCase(addDocuments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addDocuments.fulfilled, (state, action) => {
                state.loading = false;
                state.postDocuments = action.payload;
                state.documents.push(action.payload); // Add new document to documents list
            })
            .addCase(addDocuments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        // Handling deleteDocument actions
        builder
            .addCase(deleteDocument.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteDocument.fulfilled, (state, action) => {
                state.loading = false;
                state.documents = state.documents.filter(document => document.id !== action.meta.arg); // Remove deleted document
            })
            .addCase(deleteDocument.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        // Handling updateDocument actions
        builder
            .addCase(updateDocument.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateDocument.fulfilled, (state, action) => {
                state.loading = false;
                state.documents = state.documents.map(document =>
                    document.id === action.payload.id ? action.payload : document
                ); // Update the document in the documents list
            })
            .addCase(updateDocument.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setPage } = documentSlice.actions;

export default documentSlice.reducer;
