import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivacyPolicy from './Pages/PrivecyPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/refund-policy" element={<RefundPolicy/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  );
};

export default UserRoutes;
