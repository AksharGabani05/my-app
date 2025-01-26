import React, { useState } from 'react';
import { Table, Button, Form, Modal, Row, Col } from 'react-bootstrap';
import './GoldProductsManage.css';

function GoldProductsManage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Sample products data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "22K Gold Necklace",
      price: 45000,
      category: "necklaces",
      karat: "22k",
      stock: 5,
      image: "path_to_image"
    },
    // Add more products...
  ]);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    karat: '',
    stock: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    // Add product logic here
    setShowAddModal(false);
    setFormData({ name: '', price: '', category: '', karat: '', stock: '', image: null });
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    // Edit product logic here
    setShowEditModal(false);
  };

  const handleDeleteProduct = (id) => {
    // Delete product logic here
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const ProductModal = ({ show, handleClose, handleSubmit, title, product }) => (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Price (₹)</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select name="category" onChange={handleInputChange} required>
                  <option value="">Select Category</option>
                  <option value="necklaces">Necklaces</option>
                  <option value="rings">Rings</option>
                  <option value="earrings">Earrings</option>
                  <option value="bracelets">Bracelets</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Karat</Form.Label>
                <Form.Select name="karat" onChange={handleInputChange} required>
                  <option value="">Select Karat</option>
                  <option value="24k">24K</option>
                  <option value="22k">22K</option>
                  <option value="18k">18K</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Product Image</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  onChange={handleInputChange}
                  accept="image/*"
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="text-end mt-3">
            <Button variant="secondary" onClick={handleClose} className="me-2">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {title === 'Add Product' ? 'Add Product' : 'Save Changes'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );

  return (
    <div className="products-manage">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Gold Products</h2>
        <Button variant="primary" onClick={() => setShowAddModal(true)}>
          Add New Product
        </Button>
      </div>

      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Karat</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-thumbnail"
                />
              </td>
              <td>{product.name}</td>
              <td>₹{product.price.toLocaleString()}</td>
              <td>{product.category}</td>
              <td>{product.karat}</td>
              <td>{product.stock}</td>
              <td>
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="me-2"
                  onClick={() => {
                    setSelectedProduct(product);
                    setFormData(product);
                    setShowEditModal(true);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ProductModal
        show={showAddModal}
        handleClose={() => setShowAddModal(false)}
        handleSubmit={handleAddProduct}
        title="Add Product"
      />

      <ProductModal
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
        handleSubmit={handleEditProduct}
        title="Edit Product"
        product={selectedProduct}
      />
    </div>
  );
}

export default GoldProductsManage;
