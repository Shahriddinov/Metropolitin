
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {quizQuestionCreate, getQuestionQuiz, quizQuestionUpdate} from "./index";

const initialState = {
    loading: false,
    error: null,
    postQuestionQuiz: null,
    questionItems:[],
    updateQuestion:null,
    limit: 30,
    offset: 0,
    page: 1,
};

const quizQuestionCreateSlice = createSlice({
    name: 'quiz',
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
        //post Question
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
            })
        // get question
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
            })


    },
});
export const { setLimit, setOffset, setPage } = quizQuestionCreateSlice.actions;

export default quizQuestionCreateSlice.reducer;
