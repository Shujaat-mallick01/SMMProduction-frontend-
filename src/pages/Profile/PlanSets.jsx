import React, { useState } from 'react';
import DynamicTable from '../../components/shared/DynamicTable';
import { FaEye, FaPlusSquare, FaSearch } from 'react-icons/fa'; // Import the view icon and search icon
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import FieldAndError from '../../components/Form/FieldAndError'; // Adjust the import path as necessary

const PlanSets = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeRowIndex, setActiveRowIndex] = useState(null); // Track the index of the currently active row

    const PlanSet = [
        {
            id: 1,
            plansetname: 'Lorem Ipsum',
            plansetid: '641d2sa3d15ds145d1sa52d',
            standardplan: '$549.00',
            advancedplan: '$799.00',
            assignedTo: ['Agency One'],
        },
        {
            id: 2,
            plansetname: 'Lorem Ipsum',
            plansetid: '641d2sa3d15ds145d1sa52d',
            standardplan: '$549.00',
            advancedplan: '$799.00',
            assignedTo: ['Agency Three'],
        },
        {
            id: 3,
            plansetname: 'Lorem Ipsum',
            plansetid: '641d2sa3d15ds145d1sa52d',
            standardplan: '$549.00',
            advancedplan: '$799.00',
            assignedTo: ['Agency Five'],
        },
    ];

    const columns = [
        { key: 'plansetname', label: 'Plan Set Name', className: 'min-width-200' },
        { key: 'plansetid', label: 'Plan Set ID', className: 'min-width-200' },
        { key: 'standardplan', label: 'Standard Plan', className: 'min-width-200' },
        { key: 'advancedplan', label: 'Advanced Plan', className: 'min-width-200' },
        { key: 'assignedTo', label: 'Assigned To', className: 'min-width-300' },
    ];

    const renderAssignedToColumn = (row, rowIndex) => (
        <div className='d-flex flex-direction-row-reverse gap-20 align-center'>
            {row.assignedTo.map((agency, index) => (
                <div key={index}>
                    <Link>
                        <button className='border-radius-10 pxy-10'>
                            <FaEye />
                        </button>
                    </Link>
                </div>
            ))}
            <Formik
                initialValues={{ search: '' }}
                onSubmit={(values) => {
                    setSearchQuery(values.search);
                    setActiveRowIndex(null); // Close dropdown on search
                }}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit} className="d-flex align-center">
                        <div className="position-relative">
                            <FaSearch className="search-icon position-absolute" />
                            <FieldAndError
                                name="search"
                                placeholder="Search"
                                customClass="border-input pxy-10 pl-30"
                                containerClass="m-0"
                                onFocus={() => setActiveRowIndex(rowIndex)} // Set the active row index on focus
                                onBlur={() => setActiveRowIndex(null)} // Hide dropdown on blur
                            />
                            {activeRowIndex === rowIndex && ( // Show dropdown only for the focused row
                                <div className="dropdown position-absolute text-left pxy-10">
                                    <p>Assigned to</p>
                                    <ul className="dropdown-list">
                                        {row.assignedTo.map((agency, index) => (
                                            <li key={index} className="dropdown-item">
                                                {agency}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );

    return (
        <>
            <div className='d-flex-space-between d-flex flex-direction-row mb-2'>
                <h2>Plan Sets</h2>
                <Link to="/create-plan-set">
                    <button className="button-primary gap-20 align-center d-flex">
                        Create Plan Sets <FaPlusSquare />
                    </button>
                </Link>
            </div>

            <div className='section'>
                <div className='max-height'>
                    <DynamicTable
                        columns={columns}
                        data={PlanSet}
                        renderColumnContent={{ assignedTo: renderAssignedToColumn }}
                    />
                </div>
            </div>
        </>
    );
};

export default PlanSets;
