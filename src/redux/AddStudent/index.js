
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const addStudent = createAsyncThunk('students/addStudent', async (studentData, thunkAPI) => {

    return studentData;
});

const initialState = {
    loading: false,
    error: null,
    postStudent: null,
};

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addStudent.pending, (state) => {
                state.loading = true;
            })
            .addCase(addStudent.fulfilled, (state, action) => {
                state.loading = false;
                state.postStudent = action.payload;
            })
            .addCase(addStudent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default studentSlice.reducer;
