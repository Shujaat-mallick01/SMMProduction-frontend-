import React, { useState } from 'react';
import UserProfile from './UserProfile';
import Navbar from './Navbar';
import Sidebar from '../../components/sidebarcomponent/SideBarComponent';  // Import the sidebar component
import { FaBars } from 'react-icons/fa'; // Icon for the sidebar toggle

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="header px-2">
      <div className="header-content align-center d-flex d-flex-space-between mb-5">
        <h1>Dashboard</h1>
        <UserProfile />
        <FaBars className="menu-icon" onClick={toggleSidebar} />
      </div>
      <div>
        <Navbar />
      </div>

      {/* Sidebar component, visible only on smaller screens */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Header;
