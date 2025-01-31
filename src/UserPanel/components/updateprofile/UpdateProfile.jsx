import React, { useState, useEffect } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PROFILE_API = "https://jwellary-ecommerce.onrender.com/api/users/profile"; // GET Profile API
const UPDATE_PROFILE_API = "https://jwellary-ecommerce.onrender.com/api/users/update-profile"; // PUT Update API

// Token को cookies से fetch करने का function
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
  });

  // **1️⃣ Fetch User Profile (GET API)**
  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = getTokenFromCookies();
      if (!token) {
        toast.error("User not authenticated!");
        return;
      }

      try {
        const response = await fetch(PROFILE_API, {  // ✅ सही GET API
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setUser({
            profilePicture: { url: data.user.profilePicture?.url || "" },
            name: data.user.name,
            email: data.user.email,
          });
        } else {
          toast.error("Failed to load user profile");
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
        toast.error("Something went wrong!");
      }
    };

    fetchUserProfile();
  }, []);

  // Input fields handle करने के लिए
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // **2️⃣ Update Profile (PUT API)**
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getTokenFromCookies();
    if (!token) {
      toast.error("User not authenticated!");
      return;
    }

    try {
      const response1 = await fetch(UPDATE_PROFILE_API, {  // ✅ सही UPDATE API
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: user.name,
          profilePicture: user.profilePicture.url,
        }),
      });


      const data = await response1.json();
      console.log("data1",data)
      if (response1.ok) {
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
            </div>
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
              <Form.Control type="email" value={user.email} disabled />
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
