import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {ADD_SCIENCE} from "../../services/api/utilis";


export const addSciences = createAsyncThunk(
    "addSciences",
    async (payload) => {

        return await axios
            .post(ADD_SCIENCE, payload, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',

                }
            })
            .then((res) => res.data);
    }
)