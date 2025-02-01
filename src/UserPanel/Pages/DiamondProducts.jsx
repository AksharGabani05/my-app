import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Filter from '../components/Filter/Filter';
import './Gold.css';

const DiamondProducts = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [products] = useState([
    {
      id: 1,
      name: "22K Gold Traditional Necklace",
      price: 145000,
      image: "/images/gold/necklace1.jpg",
      category: "necklaces",
      karat: "22k",
      weight: "32.5g",
      description: "Intricately designed traditional necklace with antique finish",
      specifications: ["Length: 18 inches", "Clasp: Box Lock", "Style: Traditional"]
    },
    {
      id: 2,
      name: "24K Gold Bangles Set",
      price: 89000,
      image: "/images/gold/bangles1.jpg",
      category: "bangles",
      karat: "24k",
      weight: "28.3g",
      description: "Set of 4 elegant bangles with modern design",
      specifications: ["Diameter: 2.5 inches", "Style: Modern", "Set of 4"]
    },
    // ... Add 18 more products with similar structure
  ]);
  
  // Add new state for filters
  const [filters, setFilters] = useState({
    price: 100000,
    categories: [],
    karat: [],
    sort: 'newest'
  });

  // Add state for filtered products
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (filterType, value, checked) => {
    let newFilters = { ...filters };

    switch (filterType) {
      case 'price':
        newFilters.price = parseInt(value);
        break;
      case 'category':
        if (checked) {
          newFilters.categories = [...filters.categories, value];
        } else {
          newFilters.categories = filters.categories.filter(cat => cat !== value);
        }
        break;
      case 'karat':
        if (checked) {
          newFilters.karat = [...filters.karat, value];
        } else {
          newFilters.karat = filters.karat.filter(k => k !== value);
        }
        break;
      case 'sort':
        newFilters.sort = value;
        break;
      default:
        break;
    }

    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters) => {
    let result = [...products];

    // Filter by price
    result = result.filter(product => product.price <= currentFilters.price);

    // Filter by categories
    if (currentFilters.categories.length > 0) {
      result = result.filter(product => 
        currentFilters.categories.includes(product.category)
      );
    }

    // Filter by karat
    if (currentFilters.karat.length > 0) {
      result = result.filter(product => 
        currentFilters.karat.includes(product.karat.toLowerCase())
      );
    }

    // Apply sorting
    switch (currentFilters.sort) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // Assuming you have a date field, add sorting logic here
        break;
      case 'popularity':
        // Add popularity sorting logic here
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  };

  const handleProductClick = (productId) => {
    navigate(`/shop/product/${productId}`);
  };

  return (
    <Container fluid className="gold-page">
      <Row>
        <Col lg={3} md={4} className="filter-column">
          <Button 
            className="filter-toggle d-lg-none mb-3"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
          
          <div className={`filter-wrapper ${showFilters ? 'show' : ''}`}>
            <Filter onFilterChange={handleFilterChange} />
          </div>
        </Col>

        <Col lg={9} md={8}>
          <div className="products-header">
            <h2>Gold Collection</h2>
            <div className="products-meta">
              <p>{filteredProducts.length} products found</p>
            </div>
          </div>

          <Row className="products-grid">
            {filteredProducts.map(product => (
              <Col key={product.id} lg={4} md={6} sm={6} xs={12} className="mb-4">
                <Card 
                  className="product-card h-100"
                  onClick={() => handleProductClick(product.id)}
                >
                  <div className="product-image-wrapper">
                    <Card.Img variant="top" src={product.image} />
                    <div className="product-overlay">
                      <Button variant="light">View Details</Button>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <div className="product-details">
                      <Card.Text className="price">₹{product.price.toLocaleString()}</Card.Text>
                      <Card.Text className="weight">{product.weight}</Card.Text>
                    </div>
                    <Card.Text className="karat-tag">{product.karat}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DiamondProducts;
