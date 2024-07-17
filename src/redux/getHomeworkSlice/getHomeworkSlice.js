import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {GET_TASK,} from '../../services/api/utilis';

export const getTask = createAsyncThunk('getTask', async (params, thunkAPI) => {
    try {

        const { limit, offset } = params;
        const response = await axios.get(`${GET_TASK}?limit=${limit}}&offset=${offset}`, {
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