import axios from "axios";
import { store } from "../store/store";
import { logout } from "../features/auth/authSlice";

// Base API URL (ensure this points to your backend)
const API_URL = import.meta.env.VITE_API_URL;

// Axios instance setup
const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true, // This ensures cookies are sent/received with requests
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // No need to manually attach tokens since they are stored in cookies
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for handling 401 errors (token expiration)
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // If the error is 401 (Unauthorized), it may indicate that the access token has expired
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;  // Mark the request to prevent infinite retry loops

            try {
                // Request to refresh the access token using the refresh token (stored in cookies)
                await axios.post(`${API_URL}/auth/refresh`, {}, {
                    withCredentials: true,  // Ensure cookies are sent with the refresh request
                });

                // Retry the original request after the token is refreshed
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                // If refreshing the token fails, log the user out
                store.dispatch(logout());
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
