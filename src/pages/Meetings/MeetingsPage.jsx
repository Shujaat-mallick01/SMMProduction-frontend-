import React, { useState } from 'react';
import DynamicTable from '../../components/shared/DynamicTable'; // Import the DynamicTable component

const Meetings = () => {
    const [meetings, setMeetings] = useState([
        {
            id: 1,
            Date: 'September 11, 2024',
            Time: '16:00 PKT',
            MeetingTime: 'Onboarding Meeting',
            Clients: 'Good Guys Wash Shack ',
            Links: 'www.shujaat.com',
            Action: 'Mark as Completed',
        },
        {
            id: 2,
            Date: 'September 11, 2024',
            Time: '16:00 PKT',
            MeetingTime: 'Onboarding Meeting',
            Clients: 'Good Guys Wash Shack',
            Links: 'www.shujaat.com',
            Action: null,
        },
        {
            id: 3,
            Date: 'September 11, 2024',
            Time: '16:00 PKT',
            MeetingTime: 'Onboarding Meeting',
            Clients: 'Good Guys Wash Shack',
            Links: 'www.shujaat.com',
            Action: null,
        },
    ])  ;

    // Handle action button click
    const onActionClick = (id) => {
        setMeetings((prevMeetings) =>
            prevMeetings.map((meeting) =>
                meeting.id === id ? { ...meeting, Action: 'Completed' } : meeting
            )
        );
    };

    // Define columns for the DynamicTable
    const columns = [
        { key: 'Date', label: 'Date', className: 'min-width-200' },
        { key: 'Time', label: 'Time', className: 'min-width-200' },
        { key: 'MeetingTime', label: 'Meeting Name', className: 'min-width-200' },
        { key: 'Clients', label: 'Clients', className: 'min-width-200' },
        { key: 'Links', label: 'Meeting Links', className: 'min-width-200' },
        { key: 'Assignees', label: 'Assignees', className: 'min-width-200' },
    ];

    // Custom renderer for the "Assignees" column
    const renderAssignees = () => (
        <div className='d-flex flex-direction-column gap-10'>
            <button className="view-btn button-secondary-light">Account Manager</button>
            <button className="view-btn button-secondary-light">Team Alpha</button>
        </div>
    );

    // Custom renderer for the "Action" column
    const renderActions = (row) => (
        <div className='min-width-200'>
            {row.Action ? (
                <button
                    className={`view-btn ${row.Action === 'Completed' ? 'button-secondary' : 'button-accent-2'}`}
                    onClick={() => onActionClick(row.id)}
                    disabled={row.Action === 'Completed'}
                >
                    {row.Action}
                </button>
            ) : (
                <button className="view-btn button-secondary">Completed</button>
            )}
        </div>
    );

    return (
        <div className="section">
            <div className='max-height'>
                <DynamicTable
                    columns={columns}
                    data={meetings}
                    renderActions={renderActions}
                    renderColumnContent={{ Assignees: renderAssignees }}
                />
            </div>
        </div>
    );
};

export default Meetings;
