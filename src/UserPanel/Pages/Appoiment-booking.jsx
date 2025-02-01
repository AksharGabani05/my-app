import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import axios from 'axios';
import './style/AppointmentBooking.css';

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  const services = [
    'Jewelry Consultation',
    'Custom Design',
    'Jewelry Repair',
    'Appraisal',
    'Stone Setting',
    'Ring Sizing',
    'Diamond Selection',
    'Jewelry Cleaning'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/api/appointments', formData);
      setAlert({
        show: true,
        message: 'Appointment booked successfully! We will contact you shortly.',
        type: 'success'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setAlert({
        show: true,
        message: 'Error booking appointment. Please try again.',
        type: 'danger'
      });
    }
    setLoading(false);
  };

  return (
    <div className="appointment-page">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div className="appointment-header text-center mb-4">
              <h1>Schedule Your Visit</h1>
              <p className="subtitle">Experience personalized jewelry consultation with our experts</p>
            </div>
            
            <Card className="appointment-card shadow-lg">
              <Card.Body className="p-4 p-md-5">
                {alert.show && (
                  <Alert 
                    variant={alert.type} 
                    onClose={() => setAlert({ show: false })} 
                    dismissible
                    className="animate-alert"
                  >
                    {alert.message}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit} className="appointment-form">
                  <Row>
                    <Col md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                          className="custom-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email"
                          className="custom-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="Enter your phone number"
                          className="custom-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Service</Form.Label>
                        <Form.Select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="custom-select"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Preferred Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="custom-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="form-group">
                        <Form.Label>Preferred Time</Form.Label>
                        <Form.Control
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="custom-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="form-group">
                    <Form.Label>Additional Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific requirements or questions?"
                      className="custom-textarea"
                    />
                  </Form.Group>

                  <div className="text-center mt-4">
                    <Button
                      type="submit"
                      className="custom-btn"
                      disabled={loading}
                    >
                      {loading ? (
                        <span>
                          <i className="fas fa-spinner fa-spin me-2"></i>
                          Booking...
                        </span>
                      ) : (
                        'Book Appointment'
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppointmentBooking;
