import React, { useState } from 'react';
import DynamicTable from '../../components/shared/DynamicTable';

const ClientSheet = () => {
  const clients = [
    {
      id: 1,
      date: 'September 22, 2024 - Wednesday',
      businessName: 'Good Guys Wash Shack',
      selectedPlan: 'Standard + Add Ons',
      BillingMonth: 'June, 2024',
      Status: 'Waiting for Content Approval',
      team: 'Team Alpha',
    },
    {
      id: 2,
      date: 'September 22, 2024 - Wednesday',
      businessName: 'Good Guys Wash Shack',
      selectedPlan: 'Standard + Add Ons',
      BillingMonth: 'June, 2024 to September 2024',
      Status: 'Waiting for Content Approval',
      team: null,
    },
    {
      id: 3,
      date: 'September 22, 2024 - Wednesday',
      businessName: 'Good Guys Wash Shack',
      selectedPlan: 'Standard + Add Ons',
      BillingMonth: 'June, 2024',
      Status: 'Waiting for Content Approval',
      team: null,
    },
  ];

  const columns = [
    { key: 'date', label: 'Date-Day',className:'min-width-200' },
    { key: 'businessName', label: 'Business Name',className:'min-width-200' },
    { key: 'selectedPlan', label: 'Selected Plan',className:'min-width-200' },
    { key: 'BillingMonth', label: 'Billing Month',className:'min-width-200' },
    { key: 'Status', label: 'Status', className:'min-width-200' },
  ];

  const renderActions = (row) => {
    const [status, setStatus] = useState('Paid');
    const [dropdownOpen, setDropdownOpen] = useState(false); 

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

    const handleSelect = (newStatus) => {
      setStatus(newStatus);
      setDropdownOpen(false);
    };

    return (
      <div className='d-flex gap-10'>
        <button className="button-primary">View</button>
        <div className="custom-dropdown">
          <button className={`dropdown-button button-secondary ${status === 'Paid' ? 'paid' : 'unpaid'}`} onClick={toggleDropdown}>
            {status}
          </button>
          {dropdownOpen && (
            <div className="dropdown-dropdown position-absolute mt-1 px-2 py-2 d-flex flex-direction-column gap-10">
              <button
                className={`dropdown-dropdown-item border-none ${status === 'Paid' ? 'selected' : ''}`}
                onClick={() => handleSelect('Paid')}
              >
                Paid
              </button>
              <button
                className={`dropdown-dropdown-item border-none ${status === 'Unpaid' ? 'selected' : ''}`}
                onClick={() => handleSelect('Unpaid')}
              >
                Unpaid
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className='section'>
      <div className='max-height'>
        <DynamicTable
          columns={columns}
          data={clients}
          renderActions={renderActions}
        />
      </div>
    </div>
  );
};

export default ClientSheet;
