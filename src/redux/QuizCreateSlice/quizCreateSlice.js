
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {quizCreate} from "./index";

const initialState = {
    loading: false,
    error: null,
    postQuiz: null,
};

const quizCreateSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(quizCreate.pending, (state) => {
                state.loading = true;
            })
            .addCase(quizCreate.fulfilled, (state, action) => {
                state.loading = false;
                state.postQuiz = action.payload;
            })
            .addCase(quizCreate.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default quizCreateSlice.reducer;
