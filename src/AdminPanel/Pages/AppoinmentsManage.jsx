import React, { useState, useEffect } from 'react';
import { Table, Button, Badge, Form, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

const AppointmentsManage = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    date: '',
    status: 'all'
  });

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      // Temporarily using dummy data until API is ready
      const dummyData = [
        {
          _id: '1',
          date: '2024-03-20',
          time: '10:00 AM',
          name: 'John Doe',
          service: 'Jewelry Consultation',
          email: 'john@example.com',
          phone: '123-456-7890',
          status: 'pending'
        },
        // Add more dummy data as needed
      ];
      setAppointments(dummyData);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (appointmentId, newStatus) => {
    try {
      // Update the local state for now
      setAppointments(appointments.map(apt => 
        apt._id === appointmentId ? { ...apt, status: newStatus } : apt
      ));
    } catch (error) {
      console.error('Error updating appointment status:', error);
    }
  };

  const getStatusBadge = (status) => {
    const statusColors = {
      pending: 'warning',
      confirmed: 'success',
      cancelled: 'danger',
      completed: 'info'
    };
    return <Badge bg={statusColors[status]}>{status}</Badge>;
  };

  const filteredAppointments = appointments.filter(apt => {
    const dateMatch = filter.date ? apt.date === filter.date : true;
    const statusMatch = filter.status === 'all' ? true : apt.status === filter.status;
    return dateMatch && statusMatch;
  });

  return (
    <div className="appointments-manage p-4">
      <Card className="mb-4">
        <Card.Body>
          <h2 className="mb-4">Manage Appointments</h2>
          
          <Row className="mb-4">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Filter by Date</Form.Label>
                <Form.Control
                  type="date"
                  value={filter.date}
                  onChange={(e) => setFilter({ ...filter, date: e.target.value })}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Filter by Status</Form.Label>
                <Form.Select
                  value={filter.status}
                  onChange={(e) => setFilter({ ...filter, status: e.target.value })}
                >
                  <option value="all">All</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                  <option value="completed">Completed</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {loading ? (
            <div className="text-center">Loading appointments...</div>
          ) : (
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Client Name</th>
                  <th>Service</th>
                  <th>Contact</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td>
                      {appointment.date}<br/>
                      {appointment.time}
                    </td>
                    <td>{appointment.name}</td>
                    <td>{appointment.service}</td>
                    <td>
                      Email: {appointment.email}<br/>
                      Phone: {appointment.phone}
                    </td>
                    <td>{getStatusBadge(appointment.status)}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <Button
                          size="sm"
                          variant="success"
                          onClick={() => handleStatusChange(appointment._id, 'confirmed')}
                        >
                          Confirm
                        </Button>
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => handleStatusChange(appointment._id, 'cancelled')}
                        >
                          Cancel
                        </Button>
                        <Button
                          size="sm"
                          variant="info"
                          onClick={() => handleStatusChange(appointment._id, 'completed')}
                        >
                          Complete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default AppointmentsManage;