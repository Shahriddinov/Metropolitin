import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {GET_TEACHER_DELETE, GET_TEACHER_LIST, POST_TEACHER} from "../../services/api/utilis";


export const addTeachers = createAsyncThunk(
    "addTeacher",
    async (payload) => {

        return await axios
            .post(POST_TEACHER, payload, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',

                }
            })
            .then((res) => res.data);
    }
)

export const updateTeacher = createAsyncThunk(
    'teacher/updateTeacher',
    async ({ id, payload }, { rejectWithValue }) => {
        try {
            const response = await axios.patch(`${POST_TEACHER}${id}/`, payload);
            return response.data;
        } catch (error) {
            // Return the error response as the rejection value
            return rejectWithValue(error.response.data);
        }
    }
);
export const getTeacher = createAsyncThunk('teachers/allStudent', async (params,thunkAPI)=>{
    try {
        const { limit, offset, fullname } = params;
        const response = await axios.get(`${GET_TEACHER_LIST}?limit=${limit}}&offset=${offset}&fullname=${fullname || ''}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        return response.data;
        const data = await response.json();
        return {
            students: data.students,
            totalCount: data.totalCount, // Ensure this field exists in your API response
        };
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
export const getOneTeachers = createAsyncThunk('teachers/single/getTeachers', async (params, thunkAPI) => {
    try {
        const {id} = params
        const response = await axios.get(`${POST_TEACHER}${id}/`, {
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




export const deleteTeacher = createAsyncThunk(
    'teachers/delete',
    async (teacherId, thunkAPI) => {
        try {
            const response = await axios.delete(`${GET_TEACHER_DELETE}/${teacherId}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


