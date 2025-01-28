import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './style/Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '', // Adjusted to match the API field
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return {
      isValid: minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar,
      errors: {
        minLength: !minLength ? 'Password must be at least 8 characters long' : '',
        hasUpperCase: !hasUpperCase ? 'Password must contain at least one uppercase letter' : '',
        hasLowerCase: !hasLowerCase ? 'Password must contain at least one lowercase letter' : '',
        hasNumber: !hasNumber ? 'Password must contain at least one number' : '',
        hasSpecialChar: !hasSpecialChar ? 'Password must contain at least one special character' : '',
      },
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Check if all fields are filled
    const emptyFields = Object.keys(formData).filter(key => !formData[key].trim());
    if (emptyFields.length > 0) {
      toast.error('All fields are required');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match!");
      setLoading(false);
      return;
    }

    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      const errors = Object.values(passwordValidation.errors).filter((error) => error !== '');
      errors.forEach((error) => toast.error(error));
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://7fthrp5w-8080.inc1.devtunnels.ms/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName, // Match API requirements
          email: formData.email,
          password: formData.password,
        }),
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      const data = await response.json();
      toast.success(data.message || 'Registration successful!'); // Use the message from the API response
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      console.error('Registration error:', error);
      toast.error(error.message || 'Failed to connect to the server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="es-register-container">
      <div className="es-register-wrapper">
        <div className="es-register-image">
          <img
            src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg"
            alt="Welcome"
          />
        </div>
        <div className="es-register-card">
          <h2>Create Account</h2>
          <p className="es-register-subtitle">Join us today! It only takes a few steps</p>

          <form onSubmit={handleSubmit} className="es-register-form">
            <div className="es-register-form-group">
              <label htmlFor="fullName"><i className="bi bi-person-fill"></i> Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName" // Match API field name
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="es-register-form-group">
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

            <div className="es-register-form-group es-register-password-group">
              <label htmlFor="password"><i className="bi bi-lock-fill"></i> Password</label>
              <div className="es-register-password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                />
                <span
                  className="es-register-password-icon"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>

            <div className="es-register-form-group es-register-password-group">
              <label htmlFor="confirmPassword"><i className="bi bi-lock-fill"></i> Confirm Password</label>
              <div className="es-register-password-wrapper">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
                <span
                  className="es-register-password-icon"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="es-register-button"
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <p className="es-register-login-link">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
