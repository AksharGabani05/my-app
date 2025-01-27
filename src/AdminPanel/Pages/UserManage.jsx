import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import '../styles/UserManage.css';
import { PencilSquare, Trash } from 'react-bootstrap-icons';

const UserManage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('fullName');
  const [sortDirection, setSortDirection] = useState('asc');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: 'user',
    status: 'active'
  });

  useEffect(() => {
    fetchUsers();
  }, []);
  
  const fetchUsers = async () => {
    setLoading(true);
    try {
      // Replace this fetch call with your API when ready
      const response = await fetch('/api/admin/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        throw new Error('API unavailable');
      }
    } catch (error) {
      // Fallback to mock data in case of API failure
      const mockData = [
        { _id: '1', fullName: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active' },
        { _id: '2', fullName: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'inactive' },
        { _id: '3', fullName: 'Bob Johnson', email: 'bob@example.com', role: 'user', status: 'active' },
        { _id: '4', fullName: 'Alice Williams', email: 'alice@example.com', role: 'admin', status: 'suspended' },
        { _id: '5', fullName: 'Charlie Brown', email: 'charlie@example.com', role: 'user', status: 'active' },
      ];
      setUsers(mockData);
      toast.warn('Failed to fetch users, displaying mock data.');
    } finally {
      setLoading(false);
    }
  };
  

  const handleEdit = (user) => {
    setSelectedUser(user);
    setFormData({
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      status: user.status
    });
    setShowModal(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/admin/users/${selectedUser._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      
      if (response.ok) {
        toast.success('User updated successfully');
        setShowModal(false);
        fetchUsers();
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error(error.message || 'Failed to update user');
    }
  };

  const handleDelete = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await fetch(`/api/admin/users/${userId}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          toast.success('User deleted successfully');
          fetchUsers();
        } else {
          const data = await response.json();
          throw new Error(data.message);
        }
      } catch (error) {
        toast.error(error.message || 'Failed to delete user');
      }
    }
  };

  const sortUsers = (usersToSort) => {
    return [...usersToSort].sort((a, b) => {
      const aValue = a[sortField]?.toLowerCase();
      const bValue = b[sortField]?.toLowerCase();
      return sortDirection === 'asc' 
        ? aValue?.localeCompare(bValue)
        : bValue?.localeCompare(aValue);
    });
  };

  const filteredUsers = sortUsers(users.filter(user => 
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  const handleSort = (field) => {
    setSortDirection(sortField === field && sortDirection === 'asc' ? 'desc' : 'asc');
    setSortField(field);
  };

  return (
    <div className="user-manage-container">
      <div className="header-section">
        <h2>User Management</h2>
        <div className="search-box">
          <Form.Control
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th onClick={() => handleSort('fullName')} className="sortable-header">
                Name {sortField === 'fullName' && (
                  <span className="sort-indicator">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th onClick={() => handleSort('email')} className="sortable-header">
                Email {sortField === 'email' && (
                  <span className="sort-indicator">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id}>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <span className={`status-badge ${user.status}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleEdit(user)}
                    className="me-2"
                  >
                    <PencilSquare className="me-1" />
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(user._id)}
                  >
                    <Trash className="me-1" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Select
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="suspended">Suspended</option>
              </Form.Select>
            </Form.Group>
            <Button type="submit" variant="primary">
              Update User
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserManage;
