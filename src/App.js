import React from 'react';
import './App.css';

import UserRoutes from './UserPanel/UserRoutes';
import AdminRoutes from './AdminPanel/AdminRoutes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './UserPanel/components/Footer/Footer';
import { AuthProvider } from './AdminPanel/context/AuthContext';
import Login from './UserPanel/Pages/Login';
import Register from './UserPanel/Pages/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ForgotPassword from './UserPanel/components/forgotpassword/ForgotPassword';

function App() {
  return (
    <div className="App">
       <ToastContainer position="top-right" autoClose={1000} />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Admin routes */}
            <Route path="/admin/*" element={<AdminRoutes />} />
            
            {/* User routes */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="/*" element={<UserRoutes />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
