import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getTeacher} from "./getTeacherSlice";

const getTeacherSlice = createSlice({
    name: 'teacherList',
    initialState: {
        teachers: [],
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
    extraReducers: (builder)=>{
        builder
            .addCase(getTeacher.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTeacher.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.teachers = action.payload.results;
            })
            .addCase(getTeacher.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});
export const { setLimit, setOffset, setPage } = getTeacherSlice.actions;

export default getTeacherSlice.reducer;