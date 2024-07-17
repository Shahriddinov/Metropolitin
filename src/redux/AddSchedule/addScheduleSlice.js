import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {ADD_SCHEDULE} from "../../services/api/utilis";


export const addSchedule = createAsyncThunk(
    "addSchedule",
    async (payload) => {

        return await axios
            .post(ADD_SCHEDULE, payload, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',

                }
            })
            .then((res) => res.data);
    }
)