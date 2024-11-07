import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {ADD_SCIENCE, GET_SCIENCE_LIST} from "../../services/api/utilis";


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

export const updateScience = createAsyncThunk(
    'course/updateCourse',
    async ({ id, payload }, { rejectWithValue }) => {
        try {
            const response = await axios.patch(`${ADD_SCIENCE}${id}/`, payload);
            return response.data;
        } catch (error) {
            // Return the error response as the rejection value
            return rejectWithValue(error.response.data);
        }
    }
);
export const getScience = createAsyncThunk('sciences/offer/allScience', async (params, thunkAPI) => {
    try {

        const { limit, offset } = params;
        const response = await axios.get(`${GET_SCIENCE_LIST}?limit=${limit}}&offset=${offset}`, {
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


export const getAllScience = createAsyncThunk('getAllScience', async (_, thunkAPI) => {
    try {
        const response = await axios.get(GET_SCIENCE_LIST, {
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

export const deleteScience = createAsyncThunk(
    'science/delete',
    async (scienceId, thunkAPI) => {
        try {
            const response = await axios.delete(`${GET_SCIENCE_LIST}${scienceId}/`, {
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