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
    "quizQuestionUpdate",
    async ({id, payload}, {rejectWithValue}) => {

        try {
            const response = axios.patch(`${QUIZ_QUESTION_UPDATE}${id}/`, payload)
            return response.data;
        }catch (error) {
                // Return the error response as the rejection value
                return rejectWithValue(error.response.data);
            }

    }
)
export const quizQuestionDelete = createAsyncThunk(
    "quizQuestion/Delete",
    async (questionId,thunkAPI) => {

        try {
            const response = await axios.delete(`${QUIZ_QUESTION_UPDATE}${questionId}/`,)
            return response.data;
        }catch (error) {
                // Return the error response as the rejection value
            return thunkAPI.rejectWithValue(error.message);
            }

    }
)
export const getQuestionQuiz = createAsyncThunk('getQuestionQuiz', async (params, thunkAPI) => {
    try {

        const response = await axios.get(`${QUIZ_QUESTION_GET}`, {
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