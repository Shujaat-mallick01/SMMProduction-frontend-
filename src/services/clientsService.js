import axiosInstance from './api';
import { API_ROUTES } from '../constants/apiRoutes';

// Fetch clients data from the backend
export const fetchClients = async () => {
    try {
        const response = await axiosInstance.get(API_ROUTES.CLIENTS.LIST);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Error fetching clients');
    }
};

// Delete a client by ID
export const deleteClient = async (clientId) => {
    try {
        await axiosInstance.delete(API_ROUTES.CLIENTS.DELETE(clientId));
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Error deleting client');
    }
};

// Update client status or team assignment
export const updateClient = async (clientId, clientData) => {
    try {
        const response = await axiosInstance.put(API_ROUTES.CLIENTS.UPDATE(clientId), clientData);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : 'Error updating client');
    }
};
