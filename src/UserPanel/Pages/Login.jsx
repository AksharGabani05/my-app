import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import Cookies from 'js-cookie';
import './style/Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
      const response = await axios.post(
        'https://jwellary-ecommerce.onrender.com/api/users/login',
        formData,
        { withCredentials: true }
      );

      console.log("Login Response:", response.data);

      if (response.status === 200 && response.data.token) {
        const token = response.data.token;
        Cookies.set('token', token);
        console.log("Token stored:", token);

        toast.success('Login successful!');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      }
    } catch (error) {
      console.error('Login Error:', error);
      toast.error(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="es-login-container">
      <ToastContainer />
      <div className="es-login-wrapper">
        <div className="es-login-image">
          <img src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg" alt="Login" />
        </div>

        <div className="es-login-card">
          <h2>Login</h2>
          <p className="es-login-subtitle">Welcome back! Please login to your account</p>

          <form className="es-login-form" onSubmit={handleSubmit}>
            <div className="es-login-form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="es-login-form-group es-login-password-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              <span className="es-login-password-icon" onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <button type="submit" className="es-login-button">Login</button>
          </form>

          <p className="es-login-register-link">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
