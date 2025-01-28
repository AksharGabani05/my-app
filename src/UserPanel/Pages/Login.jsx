import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './style/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Login successful!');
        localStorage.setItem('token', data.token); // Store JWT token
        setTimeout(() => {
          navigate('/dashboard'); // Redirect after login
        }, 2000);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error(error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="es-login-container">
      <div className="es-login-wrapper">
        <div className="es-login-image">
          <img
            src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
            alt="Login"
          />
        </div>
        <div className="es-login-card">
          <h2>Login</h2>
          <p className="es-login-subtitle">Welcome back! Please login to your account</p>

          <form onSubmit={handleSubmit} className="es-login-form">
            <div className="es-login-form-group">
              <label htmlFor="email"><i className="bi bi-envelope-arrow-up-fill"></i> Email Address</label>
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

            <div className="es-login-form-group es-login-password-group">
              <label htmlFor="password"><i className="bi bi-lock-fill"></i> Password</label>
              <div className="es-login-password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
                <span
                  className="es-login-password-icon"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="es-login-button"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
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
