import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {GET_GROUP_LIST, GET_SCIENCE_LIST} from '../../services/api/utilis';

export const getScience = createAsyncThunk('sciences/allScience', async (params, thunkAPI) => {
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