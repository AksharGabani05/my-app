import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Sidebar.css';


import { 
  FaUser, 
  FaRegGem, 
  FaGem, 
  FaCalendarAlt, 
  FaUsers, 
  FaSignOutAlt,
  FaBars,
  FaTimes
} from 'react-icons/fa';

function Sidebar({ children }) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const menuItems = [
    { path: '/admin/profile', icon: <FaUser />, label: 'Profile' },
    { path: '/admin/silver-products', icon: <FaRegGem />, label: 'Silver Products' },
    { path: '/admin/gold-products', icon: <FaGem />, label: 'Gold Products' },
    { path: '/admin/appointments', icon: <FaCalendarAlt />, label: 'Appointments' },
    { path: '/admin/users', icon: <FaUsers />, label: 'User Management' },
  ];

  return (
    <div className="admin-layout">
      <div className={`admin-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <h3 className="sidebar-title">{!isCollapsed && 'Admin Panel'}</h3>
          <button 
            className="toggle-btn"
            onClick={() => setIsCollapsed(!isCollapsed)}
            title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {isCollapsed ? <FaBars /> : <FaTimes />}
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setActiveItem(item.path)}
              title={isCollapsed ? item.label : ''}
            >
              <span className="icon">{item.icon}</span>
              {!isCollapsed && (
                <span className="label">
                  {item.label}
                </span>
              )}
              {location.pathname === item.path && (
                <span className="active-indicator" />
              )}
            </Link>
          ))}
          
          <button 
            className="logout-btn"
            onClick={handleLogout}
            title={isCollapsed ? 'Logout' : ''}
          >
            <span className="icon"><FaSignOutAlt /></span>
            {!isCollapsed && <span className="label">Logout</span>}
          </button>
        </nav>
      </div>
      <main className={`main-content ${isCollapsed ? 'collapsed' : ''}`}>
        {children}
      </main>
    </div>
  );
}

export default Sidebar;
