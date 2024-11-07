import { createSlice } from '@reduxjs/toolkit';
import { quizQuestionCreate, getQuestionQuiz, quizQuestionUpdate, quizQuestionDelete } from "./index";

const initialState = {
    loading: false,
    error: null,
    postQuestionQuiz: null,
    questionItems: [],
    updateQuestion: null,
    deleteStatus: 'idle',
};

const quizQuestionCreateSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Post Question
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

        // Delete Question
        builder
            .addCase(quizQuestionDelete.pending, (state) => {
                state.deleteStatus = 'loading';
            })
            .addCase(quizQuestionDelete.fulfilled, (state, action) => {
                state.deleteStatus = 'succeeded';
                // Ensure `state.questionItems` is an array and filter the items
                state.questionItems = Array.isArray(state.questionItems)
                    ? state.questionItems.filter(question => question.id !== action.meta.arg)
                    : [];
            })
            .addCase(quizQuestionDelete.rejected, (state, action) => {
                state.deleteStatus = 'failed';
                state.error = action.error.message;  // Use action.error.message
            });

        // Update Questions
        builder
            .addCase(quizQuestionUpdate.pending, (state) => {
                state.loading = true;
            })
            .addCase(quizQuestionUpdate.fulfilled, (state, action) => {
                state.loading = false;
                state.updateQuestion = action.payload;
            })
            .addCase(quizQuestionUpdate.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        // Get Questions
        builder
            .addCase(getQuestionQuiz.pending, (state) => {
                state.loading = true;
            })
            .addCase(getQuestionQuiz.fulfilled, (state, action) => {
                state.loading = false;
                state.questionItems = action.payload;
            })
            .addCase(getQuestionQuiz.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default quizQuestionCreateSlice.reducer;
