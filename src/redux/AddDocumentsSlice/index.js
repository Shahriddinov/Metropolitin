import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {addDocuments} from "./DocumentsSlice";


const initialState = {
    loading: false,
    error: null,
    postDocuments: null,
};
const documentSlice = createSlice({
    name: 'document',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addDocuments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addDocuments.fulfilled, (state, action) => {
                state.loading = false;
                state.postDocuments = action.payload;
            })
            .addCase(addDocuments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default documentSlice.reducer;