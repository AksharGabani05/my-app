import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivacyPolicy from './Pages/PrivecyPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AppointmentBooking from './Pages/Appoiment-booking';
import Faq from './Pages/Faq';
import Blog from './Pages/Blog';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/refund-policy" element={<RefundPolicy/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/book-appointment" element={<AppointmentBooking />} />
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/blog" element={<Blog/>}/>
    </Routes>
  );
};

export default UserRoutes;
