import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {QUIZ_QUESTION} from "../../services/api/utilis";


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