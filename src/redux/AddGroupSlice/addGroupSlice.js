import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {POST_GROUP} from "../../services/api/utilis";


export const addGroups = createAsyncThunk(
    "addGroup",
    async (payload) => {

        return await axios
            .post(POST_GROUP, payload, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',

                }
            })
            .then((res) => res.data);
    }
)