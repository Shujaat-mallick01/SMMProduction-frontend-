import { API_ROUTES } from "../constants/apiRoutes";
import axiosInstance from "./api";

export const createUser = async (userData) => {
    try {
        const response = await axiosInstance.post(API_ROUTES.USERS.CREATE, userData);  // Using REGISTER route
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('User creation failed');
    }
};