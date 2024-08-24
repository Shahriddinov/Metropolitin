import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { QUIZ_CREATE } from "../../services/api/utilis";

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
            localStorage.setItem('quizId', quizId); // Store the ID in localStorage
        }

        return response.data;
    }
);
