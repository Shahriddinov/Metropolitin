import {createSlice} from "@reduxjs/toolkit";
import {getLibraryAll} from "./getLibrarySlice";


const getAllLibrary = createSlice({
    name: 'library',
    initialState: {
        librarys: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLibraryAll.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getLibraryAll.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.librarys = action.payload.results; // Ensure this matches the structure of your response
            })
            .addCase(getLibraryAll.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default getAllLibrary.reducer;