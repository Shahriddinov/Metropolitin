import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {addGroups} from "./addGroupSlice";
const initialState = {
    loading: false,
    error: null,
    postGroup: null,
};
const groupSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addGroups.pending, (state) => {
                state.loading = true;
            })
            .addCase(addGroups.fulfilled, (state, action) => {
                state.loading = false;
                state.postGroup = action.payload;
            })
            .addCase(addGroups.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default groupSlice.reducer;