import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {GET_GROUP_LIST,} from '../../services/api/utilis';

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