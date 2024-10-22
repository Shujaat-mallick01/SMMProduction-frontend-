import React, { useState } from 'react';
import DynamicTable from '../../components/shared/DynamicTable'; // Import the DynamicTable component
import Modal from '../../components/shared/ReUsableModal'; // Assuming you have the reusable Modal component

const ClientsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null); // Track which client is being assigned

  const clients = [
    {
      id: 1,
      date: 'September 22, 2024 - Wednesday',
      businessName: 'Good Guys Wash Shack',
      selectedPlan: 'Standard + Add Ons',
      planInclusion: '4 Posts + 8 Reels + 12 Carousels',
      invoice: 'View Invoice',
      team: 'Team Alpha',
    },
    {
      id: 2,
      date: 'September 22, 2024 - Wednesday',
      businessName: 'Good Guys Wash Shack',
      selectedPlan: 'Standard + Add Ons',
      planInclusion: '4 Posts + 8 Reels + 12 Carousels',
      invoice: 'View Invoice',
      team: null,
    },
    {
      id: 3,
      date: 'September 22, 2024 - Wednesday',
      businessName: 'Good Guys Wash Shack',
      selectedPlan: 'Standard + Add Ons',
      planInclusion: '4 Posts + 8 Reels + 12 Carousels',
      invoice: 'No Invoice',
      team: null,
    },
  ];

  // Define columns for the DynamicTable
  const columns = [
    { key: 'date', label: 'Date-Day', className: 'min-width-200' },
    { key: 'businessName', label: 'Business Name', className: 'min-width-200' },
    { key: 'selectedPlan', label: 'Selected Plan', className: 'min-width-200' },
    { key: 'planInclusion', label: 'Plan Inclusion', className: 'min-width-200' },
    { key: 'invoice', label: 'Invoice', className: 'min-width-200' },
  ];

  // Render actions (Assign to Team, View, Delete buttons)
  const renderActions = (row) => (
    <div className='min-width-300'>
      {row.team ? (
        <>
          <button className="team-assigned table-btns-desig
table-btns-desig button-secondary">Team Assigned</button>
          <span className="assigned-label button-secondary-light">
            Assigned to <br /> <b>{row.team}</b>
          </span>
        </>
      ) : (
        <button
          className="table-btns-desig
table-btns-desig assig-tem"
          onClick={() => handleAssignToTeam(row)}
        >
          Assign to Team
        </button>
      )}
      <button className="view-btn button-primary table-btns-desig
table-btns-desig">View</button>
      <button className="delete-btn button-danger table-btns-desig
table-btns-desig">Delete</button>
    </div>
  );

  // Handle "Assign to Team" button click
  const handleAssignToTeam = (client) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClient(null);
  };

  // Render custom invoice column to handle "View Invoice" and "No Invoice"
  const renderInvoice = (row) => (
    row.invoice === 'No Invoice' ? (
      <a className="table-btns-desig no-in button-danger-light" href="#">
        No Invoice
      </a>
    ) : (
      <a className="table-btns-desig" href="#">
        View Invoice
      </a>
    )
  );

  return (
    <div className='section'>
      <div className='max-height'>
        <DynamicTable
          columns={columns}
          data={clients}
          renderActions={renderActions}
          renderColumnContent={{ invoice: renderInvoice }}
        />

        {/* Modal for assigning client to team */}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title="Assign Client to Team"
          buttonText="Confirm & Save"
        >
          <div className="select-team">
            <div className="field-and-error">
              <div className="field-container form-group text-left">
                <label>Select Team</label>
                <div className="team-dropdown">
                  <select className='border-input'>
                    <option value="Team Alpha">Team Alpha - 07 Users - 20 Clients</option>
                    <option value="Team Beta">Team Beta - 05 Users - 15 Clients</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ClientsPage;
