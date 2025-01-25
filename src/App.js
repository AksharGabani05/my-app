import React from 'react';
import './App.css';
import Header from './UserPanel/components/Header/header';
import UserRoutes from './UserPanel/UserRoutes';
import AdminRoutes from './AdminPanel/AdminRoutes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './UserPanel/components/Footer/Footer';
import { AuthProvider } from './AdminPanel/context/AuthContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <UserRoutes />
                  <Footer />
                </>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;


