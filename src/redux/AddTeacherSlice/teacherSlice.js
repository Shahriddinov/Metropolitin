import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {POST_TEACHER} from "../../services/api/utilis";


export const addTeachers = createAsyncThunk(
    "addTeacher",
    async (payload) => {

        return await axios
            .post(POST_TEACHER, payload, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',

                }
            })
            .then((res) => res.data);
    }
)