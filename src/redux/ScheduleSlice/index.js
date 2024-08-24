import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ADD_SCHEDULE, GET_SCHEDULE_LIST} from '../../services/api/utilis';

export const addSchedule = createAsyncThunk('schedule/addSchedule', async (payload) => {
    return await axios.post(ADD_SCHEDULE, payload, {
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res) => res.data);
});

export const deleteSchedule = createAsyncThunk('schedule/deleteSchedule', async (scheduleId, thunkAPI) => {
    try {
        const response = await axios.delete(`${GET_SCHEDULE_LIST}${scheduleId}/`, {
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

export const updateSchedule = createAsyncThunk('schedule/updateSchedule', async ({id, payload}, {rejectWithValue}) => {
    try {
        const response = await axios.patch(`${ADD_SCHEDULE}${id}/`, payload);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Updated action types here
export const getSchedule = createAsyncThunk('schedule/getSchedule', async (params, thunkAPI) => {
    try {
        const {limit, offset} = params;
        const response = await axios.get(`${GET_SCHEDULE_LIST}?limit=${limit}&offset=${offset}`, {
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

export const getScheduleAll = createAsyncThunk('schedule/getAllSchedules', async (params, thunkAPI) => {
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
