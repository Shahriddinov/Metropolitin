

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import placeholderImage from '../../assets/images/file.png'; // Adjust the path accordingly
import {GET_LIBRARY_LIST,  POST_LIBRARY} from "../../services/api/utilis";

export const addLibrary = createAsyncThunk(
    'library/addLibrary',
    async ({ name, type, file, image }) => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('type', type);
        formData.append('file', file);

        if (image !== null) {
            formData.append('image', image);
        } else {
            const response = await fetch(placeholderImage);
            const blob = await response.blob();
            formData.append('image', blob, 'placeholder.png');
        }

        const response = await axios.post(POST_LIBRARY, formData, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    }
);

export const deleteLibrary = createAsyncThunk(
    'library/delete',
    async (libraryId, thunkAPI) => {
        try {
            const response = await axios.delete(`${GET_LIBRARY_LIST}${libraryId}/`, {
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
export const updateLibrary = createAsyncThunk(
    'library/updateLibrary',
    async ({id, payload}, {rejectWithValue}) => {
        const formData = new FormData();
        formData.append('name', payload.name);
        formData.append('type', payload.type);
        if (payload.file) formData.append('file', payload.file);
        if (payload.image !== null) {
            formData.append('image', payload.image);
        } else {
            const response = await fetch(placeholderImage);
            const blob = await response.blob();
            formData.append('image', blob, 'placeholder.png');
        }

        try {
            const response = await axios.patch(`${POST_LIBRARY}${id}/`, formData, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
            });

            return response.data;
        } catch (error) {

            return rejectWithValue(error.response.data);
        }
    }
);

export const getLibraryAll = createAsyncThunk('getLibraryAll', async (params, thunkAPI) => {
    try {
        const { limit, offset, } = params;
        const response = await axios.get(`${GET_LIBRARY_LIST}?limit=${limit}&offset=${offset}`, {
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
