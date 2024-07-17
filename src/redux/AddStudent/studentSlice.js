import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {POST_STUDENT} from "../../services/api/utilis";


export const addStudent = createAsyncThunk(
    "addStudents",
    async (payload) => {

        return await axios
            .post(POST_STUDENT, payload, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',

                }
            })
            .then((res) => res.data);
    }
)