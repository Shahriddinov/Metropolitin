

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import placeholderImage from '../../assets/images/file.png'; // Adjust the path accordingly
import {ADD_TASK, GET_TASK} from "../../services/api/utilis";
export const addTask = createAsyncThunk(
    'addTask',
    async ({ finished_date, type, file, course, teacher, group, description }) => {
        const formData = new FormData();
        formData.append('finished_date', finished_date);
        formData.append('course', course);
        formData.append('group', group);
        formData.append('teacher', teacher);
        formData.append('file', file);
        formData.append('description', description);

        const response = await axios.post(ADD_TASK, formData, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    }
);


export const getTask = createAsyncThunk('getTask', async (params, thunkAPI) => {
    try {


        const response = await axios.get(`${GET_TASK}`, {
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
