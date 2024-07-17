import {createSlice} from "@reduxjs/toolkit";
import {getAllScience} from "./getScienceSlice";

const scienceAllSlice = createSlice({
    name: 'science',
    initialState: {
        science: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllScience.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllScience.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.science = action.payload.results; // Ensure this matches the structure of your response
            })
            .addCase(getAllScience.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default scienceAllSlice.reducer;