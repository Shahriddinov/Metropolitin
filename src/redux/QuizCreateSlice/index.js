import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {GET_LIBRARY_LIST, QUIZ_CREATE, QUIZ_CREATE_GET} from "../../services/api/utilis";

export const quizCreate = createAsyncThunk(
    "quizCreate",
    async (payload) => {
        const response = await axios.post(QUIZ_CREATE, payload, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });

        const quizId = response.data.id; // Assuming the ID is returned in the response under `data.id`

        if (quizId) {
            sessionStorage.setItem('quizId', quizId); // Store the ID in localStorage
        }
        return response.data;
    }
);
export const getCreateQuiz = createAsyncThunk('getCreateQuiz', async (params, thunkAPI) => {
    try {

        const response = await axios.get(QUIZ_CREATE_GET, {
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