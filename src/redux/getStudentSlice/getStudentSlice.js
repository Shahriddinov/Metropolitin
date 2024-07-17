import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GET_STUDENT_LIST } from '../../services/api/utilis';

export const getStudent = createAsyncThunk('students/allStudent', async (params, thunkAPI) => {
    try {

        const { limit, offset } = params;
        const response = await axios.get(`${GET_STUDENT_LIST}?limit=${limit}}&offset=${offset}`, {
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