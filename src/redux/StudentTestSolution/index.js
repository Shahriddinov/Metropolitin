import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {STUDENT_TEST_SOLUTION} from "../../services/api/utilis";


export const studentTestSolution = createAsyncThunk(
    "studentTestSolution",
    async (payload) => {

        return await axios
            .post(STUDENT_TEST_SOLUTION, payload, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',

                }
            })
            .then((res) => res.data);
    }
)