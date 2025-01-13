import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DynamicTable from '../../components/shared/DynamicTable'; // Import the DynamicTable component
import { FaPlusSquare } from 'react-icons/fa';
import Modal from '../../components/shared/ReUsableModal'; // Import the Modal component
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ContentCalendars = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [monthYear, setMonthYear] = useState(''); // State for the input field

    const clients = [
        {
            id: 1,
            MonthYear: 'June 2024',
            Calendar: 'https://app.aipowerkit.com/view/581a3f86a2/Andie%20Lau%20Artist/18',
        },
        {
            id: 2,
            MonthYear: 'July 2024',
            Calendar: 'https://app.aipowerkit.com/view/581a3f86a2/Andie%20Lau%20Artist/18',
        },
        {
            id: 3,
            MonthYear: 'August 2024',
            Calendar: 'https://app.aipowerkit.com/view/581a3f86a2/Andie%20Lau%20Artist/18',
        },
    ];

    // Define columns for the DynamicTable
    const columns = [
        { key: 'MonthYear', label: 'Month - Year', className: 'min-width-200' },
        { key: 'Calendar', label: 'Calendar (Client View)', className: 'min-width-600' },
    ];

    // Render actions (View and Delete buttons)
    const renderActions = (row) => (
        <div className="table-actions min-width-200">
            <Link to='/clients/:clientId/content-calendars/calendar'>
                <button className="view-btn button-primary table-btns-desig table-button-half">View</button>
            </Link>
            <button className="delete-btn button-danger table-btns-desig table-button-half">Delete</button>
        </div>
    );

    // Open the modal
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    // Close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setMonthYear(''); // Clear the input field on close
    };

    // Handle input change for month & year
    const handleInputChange = (e) => {
        setMonthYear(e.target.value);
    };

    return (
        <div className="section text-center">
            <div className='max-height'>
                <DynamicTable columns={columns} data={clients} renderActions={renderActions} />

                {/* Modal for creating a content calendar */}
                <Modal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    title="Create Content Calendar"
                    buttonText="Create Calendar"
                >
                    <div className="select-month-year">
                        <div className="field-and-error">
                            <div className="field-container form-group text-left">
                                <label>Month & Year</label>
                                <input
                                    type="text"
                                    placeholder="Enter Month & Year"
                                    value={monthYear}
                                    onChange={handleInputChange}
                                    className="month-year-input border-input"
                                />
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
            <button className="button-secondary mt-5" onClick={handleOpenModal}>
                <FaPlusSquare /> Add Calendar
            </button>
        </div>
    );
};

export default ContentCalendars;
