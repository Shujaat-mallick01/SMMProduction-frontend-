import React from 'react';
import Navbar from '../../layouts/Header/Navbar';
import UserProfile from '../../layouts/Header/UserProfile';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
      <div className={`sidebar d-flex flex-direction-column d-flex-space-between pxy-3 fixed top-0 z-index-1000 ${isOpen ? 'open' : ''}`}>
        <button className="close-btn p-0 border-none d-flex justify-end" onClick={toggleSidebar}>
          &times;
        </button>
        <UserProfile />
        <Navbar />
      </div>
    );
  };

export default Sidebar;
