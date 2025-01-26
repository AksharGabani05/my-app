import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLoginForm from './Pages/AdminLoginForm';
import SilverProductsManage from './Pages/SilverProductsManage';
import GoldProductsManage from './Pages/GoldProductsManage';
import Sidebar from './components/Sidebar';
import { useAuth } from './context/AuthContext';
import './styles/Admin.css'; // We'll create this later
import AppointmentsManage from './Pages/AppoinmentsManage';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
        {children}
      </div>
    </div>
  ) : (
    <Navigate to="/admin/login" />
  );
};

function AdminRoutes() {
  return (
    <Routes>
      <Route path="login" element={<AdminLoginForm />} />
      <Route
        path="silver-products"
        element={
          <PrivateRoute>
            <SilverProductsManage />
          </PrivateRoute>
        }
      />
      <Route
        path="gold-products"
        element={
          <PrivateRoute>
            <GoldProductsManage />
          </PrivateRoute>
        }
      />
      <Route
        path="appointments"
        element={
          <PrivateRoute>
            <AppointmentsManage/>
          </PrivateRoute>
        }
      />
      <Route path="" element={<Navigate to="/admin/login" />} />
    </Routes>
  );
}

export default AdminRoutes;