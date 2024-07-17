import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getStudent} from "./getStudentSlice";




const getStudentSlice = createSlice({
    name: 'studentList',
    initialState: {
        students: [],
        limit: 2,
        offset: 0,
        page: 1,
        status: 'idle',
        error: null,
    },
    reducers: {
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        setOffset: (state, action) => {
            state.offset = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
            state.offset = (action.payload - 1) * state.limit;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getStudent.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getStudent.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.students = action.payload.results;
            })
            .addCase(getStudent.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { setLimit, setOffset, setPage } = getStudentSlice.actions;

export default getStudentSlice.reducer;
