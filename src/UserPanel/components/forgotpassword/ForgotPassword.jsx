import React from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  return (
    <div className="es-forgot-password-container">
      <div className="es-forgot-password-wrapper">
        <div className="es-forgot-password-image">
          <img
            src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1123.jpg"
            alt="Forgot Password"
          />
        </div>
        <div className="es-forgot-password-card">
          <h2>Forgot Password</h2>
          <p className="es-forgot-password-subtitle">
            Enter your email address and we'll send you a link to reset your password
          </p>

          <form className="es-forgot-password-form">
            <div className="es-forgot-password-form-group">
              <label htmlFor="email">
                <i className="bi bi-envelope-arrow-up-fill"></i> Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <button type="submit" className="es-forgot-password-button">
              Send Reset Link
            </button>
          </form>

          <p className="es-forgot-password-login-link">
            Remember your password? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
