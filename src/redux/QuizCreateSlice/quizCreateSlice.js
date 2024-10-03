import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {quizCreate, getCreateQuiz} from "./index";

const initialState = {
    loading: false,
    error: null,
    postQuiz: null,
    quizItems: [],


};

const quizCreateSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //post Quiz
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
            })


            //get Quiz
            .addCase(getCreateQuiz.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCreateQuiz.fulfilled, (state, action) => {
                state.loading = false;
                state.quizItems = action.payload;
            })
            .addCase(getCreateQuiz.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

    },
});


export default quizCreateSlice.reducer;
