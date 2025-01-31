import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style/Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "https://jwellary-ecommerce.onrender.com/api/users/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          toast.error("Failed to fetch user profile");
        }
      } catch (error) {
        toast.error("An error occurred while fetching profile");
        console.error("Profile fetch error:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <Container className="profile-container">
      <ToastContainer />
      <Card className="profile-card">
        <Card.Body>
          <div className="profile-header">
            <div className="profile-image-wrapper">
              <img
                src={
                  user?.profilePicture?.url ||
                  "https://via.placeholder.com/150"
                }
                alt="Profile"
                className="profile-image"
              />
            </div>
          </div>

          <div className="profile-info">
            <h3 className="username">{user?.fullName || "Loading..."}</h3>
            <p className="email">{user?.email || "Loading..."}</p>
          </div>

          <div className="profile-actions">
            <Button
              variant="primary"
              className="action-button"
              onClick={() => navigate("/user/update-profile")}
            >
              Update Profile
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
