import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import  Cookies from 'js-cookie'
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  // Function to get cookies properly
  const getCookie = (name) => {
    try {
      const cookies = document.cookie.split('; ');
      for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) return value;
      }
      return null;
    } catch (error) {
      console.error('Error getting cookie:', error);
      return null;
    }
  };

  // Function to get token from localStorage or cookies
  const getToken = () => {
    try {
      // const localStorageToken = localStorage.getItem('token');
      const cookieToken = getCookie('token');
      console.log('Cookie Token:', cookieToken);

      if (process.env.NODE_ENV === 'development') {
        // console.log('LocalStorage Token:', localStorageToken);
      }

      return cookieToken || null;
    } catch (error) {
      console.error('Error getting token:', error);
      return null;
    }
  };

  let token=Cookies.get("token")
  console.log("token",token);
  
  const isAuthenticated = Boolean(token);

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error('Please login to access this page');
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: window.location.pathname }} />;
  }

  return children;
};

export default ProtectedRoute;
