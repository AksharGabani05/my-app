import React, { useState, useEffect } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = "https://jwellary-ecommerce.onrender.com/api/users/update-profile";

const UpdateProfile = () => {
  const [user, setUser] = useState({
    profilePicture: { url: "" },
    fullName: "",
    email: "",
  });

  useEffect(() => {
    // Fetch logged-in user data from API
    const fetchUserData = async () => {
      try {
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure user is authenticated
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUser({
            profilePicture: { url: data.user.profilePicture.url },
            fullName: data.user.fullName,
            email: data.user.email,
          });
        } else {
          toast.error("Failed to load user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Something went wrong!");
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser({ ...user, profilePicture: { url: imageUrl } });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          fullName: user.fullName,
          profilePicture: user.profilePicture.url,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || "Profile updated successfully");
      } else {
        toast.error(data.message || "Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <Container className="update-profile-container">
      <ToastContainer />
      <Card className="update-profile-card">
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          <div className="profile-image-section mb-4">
            <div className="profile-image-wrapper">
              <img
                src={user.profilePicture.url || "https://via.placeholder.com/150"}
                alt="Profile"
                className="profile-image"
              />
              <div className="image-upload">
                <label htmlFor="profile-image">
                  <i className="bi bi-camera-fill camera-icon"></i>
                </label>
                <input
                  type="file"
                  id="profile-image"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </div>
            </div>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={user.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={user.email} disabled />
            </Form.Group>
            <div className="button-group">
              <Button type="submit" className="update-button">
                Save Changes
              </Button>
              <Button variant="outline-secondary" className="cancel-button">
                Cancel
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UpdateProfile;
