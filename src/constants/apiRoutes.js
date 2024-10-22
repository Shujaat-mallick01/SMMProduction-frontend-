export const API_ROUTES = {
    AUTH: {
        LOGIN: '/auth/login',
        REFRESH_TOKEN: '/auth/refresh',
        SET_PASSWORD: (uid, token) => `/auth/set-password/${token}/${uid}`,
        USER_PROFILE: (id) => ` /auth/profile/${id}`,        // GET current user's profile
        UPDATE_PROFILE: (id) => `/auth/profile/update/${id}`,  // PUT update current user's profile
    },
    USERS: {
        LIST: '/users',           // GET all users
        CREATE: '/users/create',   // POST create a user
        UPDATE: (id) => `/users/${id}/update`,  // PUT update a user by ID
        DELETE: (id) => `/users/${id}/delete`,  // DELETE a user by ID
    },
    TEAMS: {
        LIST: '/teams',
        CREATE: '/teams/create',
        UPDATE: (id) => `/teams/${id}/update`,
        DELETE: (id) => `/teams/${id}/delete`,
    },
    CLIENTS: {
        LIST: '/clients',
        CREATE: '/clients',
        UPDATE: (id) => `/clients/${id}`,
        DELETE: (id) => `/clients/${id}`,
    },
    MEETINGS: {
        LIST: '/meetings',
        CREATE: '/meetings/create',
        UPDATE: (id) => `/meetings/${id}/update`,
        DELETE: (id) => `/meetings/${id}/delete`,
    },
    CALENDAR: {
        LIST: '/calendar/events',
        CREATE: '/calendar/events/create',
        UPDATE: (id) => `/calendar/events/${id}/update`,
        DELETE: (id) => `/calendar/events/${id}/delete`,
    },
    TASKS: {
        LIST: '/tasks',
        CREATE: '/tasks/create',
        UPDATE: (id) => `/tasks/${id}/update`,
        DELETE: (id) => `/tasks/${id}/delete`,
    }
};
