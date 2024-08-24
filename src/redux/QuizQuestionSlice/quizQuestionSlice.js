
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {quizQuestionCreate} from "./index";

const initialState = {
    loading: false,
    error: null,
    postQuestionQuiz: null,
};

const quizQuestionCreateSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(quizQuestionCreate.pending, (state) => {
                state.loading = true;
            })
            .addCase(quizQuestionCreate.fulfilled, (state, action) => {
                state.loading = false;
                state.postQuestionQuiz = action.payload;
            })
            .addCase(quizQuestionCreate.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default quizQuestionCreateSlice.reducer;
