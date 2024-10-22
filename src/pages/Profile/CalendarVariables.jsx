import React, { useState } from 'react';
import DynamicTable from '../../components/shared/DynamicTable'; // Adjust the import path if necessary
import Modal from '../../components/shared/ReUsableModal'; // Assuming you have the reusable Modal component

const CalendarVariables = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(''); // State to determine which modal is open
    const [inputValue, setInputValue] = useState(''); // State for input field value

    // Sample data for tables
    const [postTypes, setPostTypes] = useState([
        { id: 1, name: 'Reels', status: 'Active' },
        { id: 2, name: 'Posts', status: 'Active' },
        { id: 3, name: 'Carousels', status: 'Inactive' },
    ]);

    const [postCategories, setPostCategories] = useState([
        { id: 1, name: 'Services', status: 'Active' },
        { id: 2, name: 'Benefits', status: 'Active' },
        { id: 3, name: 'Testimonials', status: 'Inactive' },
    ]);

    const [postCTAs, setPostCTAs] = useState([
        { id: 1, name: 'WhatsApp', status: 'Active' },
        { id: 2, name: 'Website', status: 'Active' },
        { id: 3, name: 'Email', status: 'Inactive' },
    ]);

    // Function to toggle status
    const toggleStatus = (table, setTable, id) => {
        const updatedTable = table.map((item) =>
            item.id === id
                ? { ...item, status: item.status === 'Active' ? 'Inactive' : 'Active' }
                : item
        );
        setTable(updatedTable);
    };

    // Define columns for each table
    const columns = [
        { key: 'name', label: 'Name', className: 'pst-typ' },
        { key: 'status', label: 'Status', className: 'pst-sts' },
    ];

    // Render status buttons in tables
    const renderColumnContent = (table, setTable) => ({
        status: (row) => (
            <button
                className={`button-secondary${row.status === 'Inactive' ? '-light' : ''}`}
                onClick={() => toggleStatus(table, setTable, row.id)}
            >
                {row.status}
            </button>
        ),
    });

    // Open modal with specific type
    const handleOpenModal = (type) => {
        setModalType(type);
        setIsModalOpen(true);
    };

    // Close modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalType('');
        setInputValue(''); // Clear input field
    };

    // Handle input change in modal
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // Render content for modal based on the type
    const renderModalContent = () => {
        let placeholder = '';
        let title = '';

        switch (modalType) {
            case 'postType':
                placeholder = 'Post Type';
                title = 'Add Post Type';
                break;
            case 'postCategory':
                placeholder = 'Post Category';
                title = 'Add Post Category';
                break;
            case 'postCTA':
                placeholder = 'Post CTA';
                title = 'Add Post CTA';
                break;
            default:
                return null;
        }

        return (
            <div className="field-and-error text-left">
                <div className="field-container">
                    <label>{placeholder}</label>
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={handleInputChange}
                        className="border-input mb-1"
                    />
                    <label>Status</label>
                    <select className="modal-select border-input">
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
            </div>
        );
    };

    return (
        <div className="section">
            <div className="row col-gap display-block-mob gap-10 wrap">
                <div className="col-md-6 col-sm-12 text-center max-height mb-2">
                    <DynamicTable
                        columns={columns}
                        data={postTypes}
                        renderColumnContent={renderColumnContent(postTypes, setPostTypes)}
                    />
                    <button
                        className="button-accent-2 mt-5 width-100 col-white d-flex justify-center gap-20 align-center"
                        onClick={() => handleOpenModal('postType')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                        </svg> Add Post Type
                    </button>
                </div>
                <div className="col-md-6 col-sm-12 text-center mb-2">
                    <DynamicTable
                        columns={columns}
                        data={postCategories}
                        renderColumnContent={renderColumnContent(postCategories, setPostCategories)}
                    />
                    <button
                        className="button-accent-2 mt-5 width-100 col-white d-flex justify-center gap-20 align-center"
                        onClick={() => handleOpenModal('postCategory')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                        </svg> Add Post Category
                    </button>
                </div>
                <div className="col-md-6 col-sm-12 text-center mb-2">
                    <DynamicTable 
                        columns={columns}
                        data={postCTAs}
                        renderColumnContent={renderColumnContent(postCTAs, setPostCTAs)}
                    />
                    <button
                        className="button-accent-2 mt-5 width-100 col-white d-flex justify-center gap-20 align-center"
                        onClick={() => handleOpenModal('postCTA')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                        </svg> Add Post CTA
                    </button>
                </div>
            </div>

            {/* Modal for adding post type/category/CTA */}
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                title={modalType === 'postType' ? 'Add Post Type' : modalType === 'postCategory' ? 'Add Post Category' : 'Add Post CTA'}
                buttonText="Create"
            >
                {renderModalContent()}
            </Modal>
        </div>
    );
};

export default CalendarVariables;
