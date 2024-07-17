
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {POST_DOCUMENTS} from "../../services/api/utilis";

export const addDocuments = createAsyncThunk(
    'document/addDocument',
    async ({ command_number, order_date, description, file, image }) => {
        const formData = new FormData();
        formData.append('command_number', command_number);
        formData.append('order_date', order_date);
        formData.append('description', description);
        formData.append('file', file);
        formData.append('image', image);

        const response = await axios.post(POST_DOCUMENTS, formData, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    }
);
