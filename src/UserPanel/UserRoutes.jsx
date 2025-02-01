import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

import PrivacyPolicy from './Pages/PrivecyPolicy';
import RefundPolicy from './Pages/RefundPolicy';
import Contact from './Pages/Contact';
import AppointmentBooking from './Pages/Appoiment-booking';
import Faq from './Pages/Faq';
import Blog from './Pages/Blog';
import Gold from './Pages/Gold';
import Header from './components/Header/header';
import Footer from './components//Footer/Footer'
import SingleProduct from './Pages/SingleProduct';
import About from './Pages/About';
import Profile from './Pages/Profile';
import ResetPassword from './components/resetpassword/ResetPassword';
import UpdateProfile from './components/updateprofile/UpdateProfile';
import Cart from './Pages/Cart';
import Orders from './Pages/Orders';
import BronzeProducts from './Pages/BronzeProducts';
import DiamondProducts from './Pages/DiamondProducts';
import SilverProducts from './Pages/SilverProducts';
import Home from './Pages/Home';

const UserRoutes = () => {
  return (
    <>
      {/* Place Header outside of Routes */}
      <Header />
      <Routes>
        
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-appointment" element={<AppointmentBooking />} />
        <Route path="/faq" element={<Faq />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/shop/gold" element={<Gold />} />
        <Route path="/shop/silver" element={<SilverProducts />} />
        <Route path="/shop/bronze" element={<BronzeProducts />} />
        <Route path="/shop/diamond" element={<DiamondProducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop/product/:id" element={<SingleProduct />} />
        <Route
          path="/user/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/update-profile"
          element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/reset-password"
          element={
            <ProtectedRoute>
              <ResetPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default UserRoutes;
