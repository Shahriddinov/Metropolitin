import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GET_TEACHER_LIST} from "../../services/api/utilis";

export const getTeacher = createAsyncThunk('teachers/allStudent', async (params,thunkAPI)=>{
    try {
        const { limit, offset } = params;
        const response = await axios.get(`${GET_TEACHER_LIST}?limit=${limit}}&offset=${offset}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const getTeachers = createAsyncThunk('teachers/getTeachers', async (_, thunkAPI) => {
    try {
        const response = await axios.get(GET_TEACHER_LIST, {
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