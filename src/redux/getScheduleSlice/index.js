import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {GET_SCHEDULE_LIST} from '../../services/api/utilis';

export const getSchedule = createAsyncThunk('getLibrary', async (params, thunkAPI) => {
    try {

        const { limit, offset } = params;
        const response = await axios.get(`${GET_SCHEDULE_LIST}?limit=${limit}}&offset=${offset}`, {
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
export const getScheduleAll = createAsyncThunk('getLibrary', async (params, thunkAPI) => {
    try {
        const response = await axios.get(GET_SCHEDULE_LIST, {
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

