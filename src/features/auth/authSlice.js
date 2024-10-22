import { createSlice } from "@reduxjs/toolkit";

// Initial state with just the user data (tokens are managed via cookies)
const initialState = {
    user: null,  // Stores the authenticated user's data
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Action to set user data after successful login
        setUser: (state, action) => {
            state.user = action.payload.user;
        },
        // Action to clear the user data on logout
        logout: (state) => {
            state.user = null;  // Clear the user data
        },
    }
});

// Export the actions for use in components or thunks
export const { setUser, logout } = authSlice.actions;

// The reducer is exported to be used in the store setup
export default authSlice.reducer;
