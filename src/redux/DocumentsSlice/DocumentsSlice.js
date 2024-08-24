import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDocuments, deleteDocument,getDocument, updateDocument } from './index';

// Initial state
const initialState = {
    documents: [], // Combined documents list
    postDocuments: null, // Holds the last added document
    limit: 2, // Pagination limit
    offset: 0, // Pagination offset
    page: 1, // Current page
    status: 'idle', // Status for getDocument
    loading: false, // Loading state for add, delete, update actions
    error: null, // Error message
};

// Create the combined slice
const documentSlice = createSlice({
    name: 'GetDocument',
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
        // Handling getDocument actions
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

export const { setLimit, setOffset, setPage } = documentSlice.actions;

export default documentSlice.reducer;
