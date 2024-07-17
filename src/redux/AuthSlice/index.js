import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LOGIN_URL } from "../../services/api/utilis";

export const login = createAsyncThunk('auth/login', async ({ passport, password }, { rejectWithValue }) => {
    try {
        const response = await axios.post(LOGIN_URL, { passport, password });
        const { data, access, refresh } = response.data;
        if (data && data.id) {
            localStorage.setItem('token', access);
            localStorage.setItem('refreshToken', refresh);
            localStorage.setItem('userID', data.id);
            localStorage.setItem('groupID', data.group);
            return { access, refresh, user: data };
        } else {
            throw new Error('User ID not found in response data');
        }
    } catch (error) {
        console.error('Login error:', error.response ? error.response.data : error.message);
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
});