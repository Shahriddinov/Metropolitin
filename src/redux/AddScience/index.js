import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {addSciences} from "./addScienceSlice";
const initialState = {
    loading: false,
    error: null,
    postScience: null,
};
const scienceSlice = createSlice({
    name: 'sciences',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
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
            });
    },
});

export default scienceSlice.reducer;