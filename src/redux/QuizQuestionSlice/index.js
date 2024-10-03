import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { QUIZ_QUESTION, QUIZ_QUESTION_GET, QUIZ_QUESTION_UPDATE} from "../../services/api/utilis";


export const quizQuestionCreate = createAsyncThunk(
    "quizQuestionCreate",
    async (payload) => {

        return await axios
            .post(QUIZ_QUESTION, payload, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',

                }
            })
            .then((res) => res.data);
    }
)
export const quizQuestionUpdate = createAsyncThunk(
    "quizQuestionCreate",
    async (id,payload) => {

        return await axios
            .post(`${QUIZ_QUESTION_UPDATE}${id}/`, payload, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',

                }
            })
            .then((res) => res.data);
    }
)
export const getQuestionQuiz = createAsyncThunk('getQuestionQuiz', async (params, thunkAPI) => {
    try {
        const { limit, offset, } = params;
        const response = await axios.get(`${QUIZ_QUESTION_GET}?limit=${limit}&offset=${offset}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});