import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GET_DOCUMENT_LIST } from '../../services/api/utilis';

export const getDocument = createAsyncThunk('getDocument', async (params, thunkAPI) => {
    try {

        const { limit, offset } = params;
        const response = await axios.get(`${GET_DOCUMENT_LIST}?limit=${limit}}&offset=${offset}`, {
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
