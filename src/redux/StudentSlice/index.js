import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {GET_STUDENT_DELETE, GET_STUDENT_LIST, POST_STUDENT} from "../../services/api/utilis";


export const addStudent = createAsyncThunk(
    "addStudents",
    async (payload) => {

        return await axios
            .post(POST_STUDENT, payload, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',

                }
            })
            .then((res) => res.data);
    }
);

export const updateStudent = createAsyncThunk(
    'student/updateStudent',
    async ({id, payload}, {rejectWithValue}) => {
        try {
            const response = await axios.patch(`${POST_STUDENT}${id}/`, payload, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',

                }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);
export const getOneStudent = createAsyncThunk('students/allStudent', async (params, thunkAPI) => {
    try {
        const {id} = params
        const response = await axios.get(`${POST_STUDENT}${id}/`, {
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
export const getOfferStudent = createAsyncThunk('students/allOfferStudent', async (params, thunkAPI) => {
    try {
        const {limit, offset, fullname} = params;
        const response = await axios.get(`${GET_STUDENT_LIST}?limit=${limit}&offset=${offset}&fullname=${fullname || ''}`, {
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


export const deleteStudent = createAsyncThunk(
    'students/delete',
    async (studentId, thunkAPI) => {
        try {
            const response = await axios.delete(`${GET_STUDENT_DELETE}/${studentId}`, {
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
