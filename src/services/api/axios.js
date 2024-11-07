// axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_ROOT,
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

// CSRF token olish funksiyasi
export const getCSRFToken = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_ROOT}/get-csrf-token`); // CSRF tokenni olish uchun API manzili
    return response.data.csrfToken;
};

// Interceptor yordamida har bir zapros oldidan CSRF tokenni qo'shish
axiosInstance.interceptors.request.use(async (config) => {
    const csrfToken = await getCSRFToken();
    config.headers['X-CSRFToken'] = csrfToken;
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;
