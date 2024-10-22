import React from 'react';
import DynamicTable from '../../components/shared/DynamicTable';
import { Link } from 'react-router-dom';

const AssignedTasks = () => {
    const Tasks = [
        {
            id: 1,
            date: '16:45:00 - September 11, 2024',
            businessName: 'Good Guys Wash Shack',
            AssignedTasks: 'Monthly Invoice Generation (Upfront)',
        },
        {
            id: 2,
            date: '16:45:00 - September 11, 2024',
            businessName: 'Good Guys Wash Shack',
            AssignedTasks: 'Monthly Invoice Generation (Upfront)',
        },
        {
            id: 3,
            date: '16:45:00 - September 11, 2024',
            businessName: 'Good Guys Wash Shack',
            AssignedTasks: 'Monthly Invoice Generation (Upfront)',
        },
    ];

    const columns = [
        { key: 'date', label: 'Assigned on (Time/Date)', className: 'min-width-200' },
        { key: 'businessName', label: 'Business Name', className: 'min-width-200' },
        { key: 'AssignedTasks', label: 'Assigned Tasks', className: 'min-width-600' },
    ];

    const renderActions = (row) => (
        <div className='min-width-200'>
            <Link to='/assigned-task'>
                <button className="button-primary width-full">Go-to Task</button>
            </Link>
        </div>
    );

    return (
        <div className='section'>
            <div className='max-height'>
                <DynamicTable
                    columns={columns}
                    data={Tasks}
                    renderActions={renderActions}
                />
            </div>
        </div>
    );
};

export default AssignedTasks;
