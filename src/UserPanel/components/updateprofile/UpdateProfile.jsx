import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PROFILE_API = "https://jwellary-ecommerce.onrender.com/api/users/profile";
const UPDATE_PROFILE_API = "https://jwellary-ecommerce.onrender.com/api/users/update-profile";

const getTokenFromCookies = () => {
  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find((row) => row.startsWith("token="));
  return tokenCookie ? tokenCookie.split("=")[1] : null;
};

const UpdateProfile = () => {
  const [user, setUser] = useState({
    profilePicture: { url: "" },
    name: "",
    email: "",
    file: null, // Store the selected image file
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = getTokenFromCookies();
      if (!token) {
        toast.error("User not authenticated!");
        return;
      }

      try {
        const response = await axios.get(PROFILE_API, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data.user) {
          setUser({
            profilePicture: { url: response.data.user.profilePicture?.url || "" },
            name: response.data.user.fullName,
            email: response.data.user.email,
          });
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
        toast.error("Something went wrong!");
      }
    };

    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUser((prevUser) => ({
        ...prevUser,
        profilePicture: { url: URL.createObjectURL(file) }, // Set preview URL
        file: file, // Store actual file for upload
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getTokenFromCookies();
    if (!token) {
      toast.error("User not authenticated!");
      return;
    }

    const formData = new FormData();
    formData.append("fullName", user.name);
    formData.append("email", user.email);

    if (user.file) {
      formData.append("profilePicture", user.file);
    }

    try {
      const response = await axios.put(UPDATE_PROFILE_API, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success(response.data.message || "Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.response?.data?.message || "Failed to update profile");
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
            </div>
            <Form.Group className="mb-3">
              <Form.Label>Change Profile Picture</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
            </Form.Group>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button type="submit" className="update-button">
              Save Changes
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UpdateProfile;
