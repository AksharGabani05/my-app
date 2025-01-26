import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
// import '../styles/Profile.css';

function Profile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || 'Admin User',
    email: user?.email || 'admin@example.com',
    phone: user?.phone || '',
    role: user?.role || 'Administrator'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically update the user profile
    // through an API call
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Admin Profile</h1>
      </div>

      <div className="profile-content">
        <div className="profile-avatar">
          <div className="avatar-circle">
            {formData.name.charAt(0).toUpperCase()}
          </div>
          <button 
            className="edit-button"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <div className="profile-details">
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Role</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  readOnly
                />
              </div>
              <button type="submit" className="save-button">
                Save Changes
              </button>
            </form>
          ) : (
            <div className="info-groups">
              <div className="info-group">
                <label>Name</label>
                <p>{formData.name}</p>
              </div>
              <div className="info-group">
                <label>Email</label>
                <p>{formData.email}</p>
              </div>
              <div className="info-group">
                <label>Phone</label>
                <p>{formData.phone || 'Not provided'}</p>
              </div>
              <div className="info-group">
                <label>Role</label>
                <p>{formData.role}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
