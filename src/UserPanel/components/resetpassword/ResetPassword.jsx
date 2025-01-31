import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const RESET_PASSWORD_API = "https://jwellary-ecommerce.onrender.com/api/users/reset-password";

// Token को cookies से fetch करने का function
const getTokenFromCookies = () => {
  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find((row) => row.startsWith("token="));
  return tokenCookie ? tokenCookie.split("=")[1] : null;
};

const ResetPassword = () => {
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Input field change handle करने के लिए
  const handleChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  // **Reset Password API Call**
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getTokenFromCookies();
    if (!token) {
      toast.error("User not authenticated!");
      return;
    }

    // **Validation: Check if newPassword & confirmPassword match**
    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error("New passwords do not match!");
      return;
    }

    try {
      const response1 = await fetch(RESET_PASSWORD_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          oldPassword: passwords.currentPassword,
          newPassword: passwords.newPassword,
          confirmPassword:passwords.confirmPassword
        }),
      });

      // ✅ **Check if response is not JSON**
      // const contentType = response1.headers.get("content-type");
      if (!response1.ok) {
        // if (contentType && contentType.includes("application/json")) {
          //   const errorData = await response.json();
          //   throw new Error(errorData.message || "Failed to update password");
          // } else {
            //   throw new Error("Server returned an invalid response (HTML or not found)");
            // }
          }
          
          // ✅ **Parse JSON Response**
          const data = await response1.json();
          toast.success(data.message || "Password updated successfully");
          console.log("response1",data)

      // ✅ **Redirect to login after success**
      // setTimeout(() => {
      //   navigate("/login");
      // }, 2000);
    } catch (error) {
      // console.error("Error updating password:", error);
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <Container className="reset-password-container">
      <ToastContainer />
      <Card className="reset-password-card">
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                name="currentPassword"
                value={passwords.currentPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                name="newPassword"
                value={passwords.newPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={passwords.confirmPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button type="submit" className="w-100 reset-button">
              Update Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ResetPassword;
