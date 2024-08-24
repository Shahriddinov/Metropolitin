import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {GET_DOCUMENT_LIST, POST_DOCUMENTS} from "../../services/api/utilis";

export const addDocuments = createAsyncThunk(
    'document/addDocument',
    async (formData) => {
        const response = await axios.post(POST_DOCUMENTS, formData, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    }
);
export const deleteDocument = createAsyncThunk(
    'document/delete',
    async (documentId, thunkAPI) => {
        try {
            const response = await axios.delete(`${GET_DOCUMENT_LIST}${documentId}/`, {
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

export const updateDocument = createAsyncThunk(
    'document/updateDocument',
    async ({ id, payload }, { rejectWithValue }) => {
        try {
            const response = await axios.patch(`${POST_DOCUMENTS}${id}/`, payload, {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                }
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);
export const getDocument = createAsyncThunk('getDocument', async (params, thunkAPI) => {
    try {

        const { limit, offset } = params;
        const response = await axios.get(`${GET_DOCUMENT_LIST}?limit=${limit}}&offset=${offset}`, {
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