import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

import { API_ROUTES } from '../constants/apiRoutes'

export const loginUser = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}${API_ROUTES.AUTH.LOGIN}`, {
            username,
            password,
        }, {
            withCredentials: true,  // Include cookies in the refresh request
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Login failed');
    }
};


export const setNewPassword = async (uid, token, password) => {
    try {
        const response = await axios.post(`${API_URL}${API_ROUTES.AUTH.SET_PASSWORD(uid, token)}`, {
            password,
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Password reset failed');
    }
}