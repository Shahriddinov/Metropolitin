


import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {GET_GROUP_LIST, POST_GROUP} from "../../services/api/utilis";


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
export const getGroup = createAsyncThunk('getGroup', async (params, thunkAPI) => {
    try {

        const { limit, offset } = params;
        const response = await axios.get(`${GET_GROUP_LIST}?limit=${limit}}&offset=${offset}`, {
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
export const getAllGroups = createAsyncThunk('getAllGroups', async (_, thunkAPI) => {
    try {
        const response = await axios.get(GET_GROUP_LIST, {
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
export const updateGroup = createAsyncThunk(
    'group/updateGroup',
    async ({ id, payload }, { rejectWithValue }) => {
        try {
            const response = await axios.patch(`${POST_GROUP}${id}/`, payload);
            return response.data;
        } catch (error) {
            // Return the error response as the rejection value
            return rejectWithValue(error.response.data);
        }
    }
);
export const deleteGroup = createAsyncThunk(
    'group/delete',
    async (groupId, thunkAPI) => {
        try {
            const response = await axios.delete(`${GET_GROUP_LIST}${groupId}/`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);