// Main navigation links (GlobalNavbar)
export const MAIN_NAV_LINKS = [
    { path: '/teams', label: 'Teams' },
    { path: '/clients', label: 'Clients' },
    { path: '/users', label: 'Users' },
    { path: '/meetings', label: 'Meetings' }
];

// Secondary navigation links (SecondaryNavbar)
export const SECONDARY_NAV_LINKS = (clientId) => [
    { path: `/clients/${clientId}/business-details`, label: 'Business Details' },
    { path: `/clients/${clientId}/content-calendars`, label: 'Content Calendars' },
    { path: `/clients/${clientId}/plan`, label: 'Plan' },
    // { path: `/clients/${clientId}/web-development-details`, label: 'Web Development Details' },
    { path: `/clients/${clientId}/threads`, label: 'Threads' },
    { path: `/clients/${clientId}/proposal`, label: 'Proposal' }
];


// Route paths for the app
export const ROUTES = {
    teams: '/teams',
    clients: '/clients',
    users: '/users',
    meetings: '/meetings',
    businessDetails: '/clients/:clientId/business-details',
    contentCalendars: '/clients/:clientId/content-calendars',
    plan: '/clients/:clientId/plan',
    // webDevelopmentDetails: '/clients/:clientId/web-development-details',
    threads: '/clients/:clientId/threads',
    proposal: 'clients/:clientId/proposal'
};