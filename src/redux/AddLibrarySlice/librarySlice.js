import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import placeholderImage from '../../assets/images/file.png'; // Adjust the path accordingly
import { POST_LIBRARY } from "../../services/api/utilis";

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
            // Fetch the placeholder image
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
