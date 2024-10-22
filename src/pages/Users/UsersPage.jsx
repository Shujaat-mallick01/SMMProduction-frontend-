import React from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DynamicTable from '../../components/shared/DynamicTable';

const UsersPage = () => {

  const Users = [
    {
      id: 1,
      FirstName: 'Bilal',
      LastName: 'Faheem Qazi',
      EmailAddress: 'bilalfaheem2000@gmail.com',
      Role: 'Content Writer',
      Team: 'Team Alpha',
    },
    {
      id: 2,
      FirstName: 'Bilal',
      LastName: 'Faheem Qazi',
      EmailAddress: 'bilalfaheem2000@gmail.com',
      Role: 'Graphic Designer',
      Team: 'Team Alpha',
    },
    {
      id: 3,
      FirstName: 'Bilal',
      LastName: 'Faheem Qazi',
      EmailAddress: 'bilalfaheem2000@gmail.com',
      Role: 'Web Development',
      Team: 'Not Assigned',
    },
    {
      id: 4,
      FirstName: 'Bilal',
      LastName: 'Faheem Qazi',
      EmailAddress: 'bilalfaheem2000@gmail.com',
      Role: 'Web Development',
      Team: 'Not Assigned',
    },
  ];

  // Define columns for the DynamicTable
  const columns = [
    { key: 'FirstName', label: 'First Name', className:'min-width-200' },
    { key: 'LastName', label: 'Last Name', className:'min-width-200' },
    { key: 'EmailAddress', label: 'Email Address', className:'min-width-200' },
    { key: 'Role', label: 'Role', className:'min-width-200' },
    { key: 'Team', label: 'Team' , className:'min-width-200'},
  ];

  // Render actions (View and Delete buttons)
  const renderActions = (row) => (
    <div className='d-flex gap-10 justify-center'>
      <Link to="/users/view">
        <button className="view-btn button-primary">View</button>
      </Link>
      <Link to="/delete">
        <button className="delete-btn button-danger ">Delete</button>
      </Link>
    </div>
  );

  return (
    <>
      <div className='d-flex-space-between d-flex flex-direction-row mb-2'>
        <h2>Users</h2>
        <Link to="/users/create">
          <button className="button-primary gap-20 align-center d-flex">
            Create New User <FaPlusSquare />
          </button>
        </Link>
      </div>

      <div className='section'>
        <div className='max-height'>
          <DynamicTable columns={columns} data={Users} renderActions={renderActions} />
        </div>
      </div>
    </>
  );
};

export default UsersPage;
