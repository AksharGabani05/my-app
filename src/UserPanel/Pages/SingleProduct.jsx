import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const SingleProduct = () => {
  const { id } = useParams();
  
  // Fetch product details based on id
  const product = {
    // Product details would come from your data source
  };

  return (
    <Container className="single-product-page py-5">
      <Row>
        <Col md={6}>
          <div className="product-gallery">
            <img src={product.image} alt={product.name} className="main-image" />
          </div>
        </Col>
        <Col md={6}>
          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="price">₹{product.price?.toLocaleString()}</p>
            <p className="weight">Weight: {product.weight}</p>
            <p className="description">{product.description}</p>
            
            <div className="specifications">
              <h3>Specifications</h3>
              <ul>
                {product.specifications?.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>

            <div className="actions mt-4">
              <Button variant="primary" size="lg" className="me-3">
                Add to Cart
              </Button>
              <Button variant="outline-primary" size="lg">
                Buy Now
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProduct; 