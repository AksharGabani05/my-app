import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h3>Admin Panel</h3>
      </div>
      <nav className="sidebar-nav">
        <Link to="/admin/silver-products">Silver Products</Link>
        <Link to="/admin/gold-products">Gold Products</Link>
        <Link to="/admin/appointments">Appointments</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
}

export default Sidebar;
