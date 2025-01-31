import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./style/Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = document.cookie.split("=")[1] // Get token from cookies
        console.log("User Token:", token); // Debugging token

        if (!token) {
          toast.error("User not authenticated! Please login.");
          navigate("/login");
          return;
        }

        // Fetch user profile
        const response = await fetch(
          "https://jwellary-ecommerce.onrender.com/api/users/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`, // Correctly passing the token
              "Content-Type": "application/json",
            },
          }
        );
        // fetch("https://jwellary-ecommerce.onrender.com/api/users/profile")
        // .then((res)=>{res.json()})
        // .then((data)=>{
        //   console.log(data);
          
        // })


        const data = await response.json();
        console.log("API Response:", data); // Debugging API response

        if (!response.ok) {
          if (response.status === 401) {
            toast.error("Session expired! Please login again.");
            // Cookies.remove("token");
            // navigate("/login");
          } else {
            toast.error(data.message || "Failed to fetch user profile");
          }
          return;
        }

        // Set user data in state
        setUser(data.user);
      } catch (error) {
        toast.error("An error occurred while fetching profile");
        // console.error("Profile fetch error:", error);
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
                src={user?.profilePicture?.url || "https://via.placeholder.com/150"}
                alt="Profile"
                className="profile-image"
              />
            </div>
          </div>

          <div className="profile-info">
            <h3 className="username">{user?.fullName || "Loading..."}</h3> {/* Use fullName */}
            <p className="email">{user?.email || "Loading..."}</p>
          </div>

          <div className="profile-actions">
            <Button variant="primary" className="action-button" onClick={() => navigate("/user/update-profile")}>
              Update Profile
            </Button> <br /><br />
            <Button variant="primary" className="action-button" onClick={() => navigate("/user/reset-password")}>
              Reset Password
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default Profile;
