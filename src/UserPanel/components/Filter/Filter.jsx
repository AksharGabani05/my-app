import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './Filter.css';

const Filter = ({ onFilterChange }) => {
  const [price, setPrice] = useState(50000); // Default price range

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
    onFilterChange('price', newPrice);
  };

  return (
    <div className="filter-sidebar">
      {/* Category Filter */}
      <div className="filter-section">
        <h4>Category</h4>
        {['Necklaces', 'Rings', 'Earrings', 'Bracelets'].map((category) => (
          <div key={category} className="filter-checkbox">
            <Form.Check
              type="checkbox"
              id={`category-${category.toLowerCase()}`}
              label={category}
              onChange={(e) => onFilterChange('category', category.toLowerCase(), e.target.checked)}
            />
          </div>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="filter-section">
        <h4>Price Range</h4>
        <Form.Range min={0} max={200000} step={1000} value={price} onChange={handlePriceChange} />
        <div className="price-labels">
          <span>₹0</span>
          <span className="selected-price">₹{price}</span>
          <span>₹200,000</span>
        </div>
      </div>

      {/* Customer Rating Filter */}
      <div className="filter-section">
        <h4>Customer Rating</h4>
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="filter-radio">
            <Form.Check
              type="radio"
              id={`rating-${rating}`}
              name="rating"
              label={`${rating} Stars & Up`}
              onChange={() => onFilterChange('rating', rating)}
            />
          </div>
        ))}
      </div>

      {/* Sorting Options */}
      <div className="filter-section">
        <h4>Sort By</h4>
        <Form.Select onChange={(e) => onFilterChange('sort', e.target.value)}>
          <option value="a-to-z">A to Z</option>
          <option value="z-to-a">Z to A</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default Filter;
