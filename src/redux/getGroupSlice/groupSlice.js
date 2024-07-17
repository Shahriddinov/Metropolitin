import {createSlice} from "@reduxjs/toolkit";
import {getAllGroups} from "./getGroupSlice";

const allGroupsSlice = createSlice({
    name: 'groups',
    initialState: {
        allGroups: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllGroups.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllGroups.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.allGroups = action.payload.results; // Ensure this matches the structure of your response
            })
            .addCase(getAllGroups.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default allGroupsSlice.reducer;