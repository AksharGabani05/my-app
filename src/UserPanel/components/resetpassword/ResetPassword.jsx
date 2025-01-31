import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <Container className="reset-password-container">
      <ToastContainer />
      <Card className="reset-password-card">
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Current Password</Form.Label>
              <Form.Control type="password" name="currentPassword" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" name="newPassword" required />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control type="password" name="confirmPassword" required />
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
