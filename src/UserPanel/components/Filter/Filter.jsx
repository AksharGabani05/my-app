import React from 'react';
import { Form } from 'react-bootstrap';
import './Filter.css';

const Filter = ({ onFilterChange }) => {
  return (
    <div className="filter-sidebar">
      <div className="filter-section">
        <h4>Price Range</h4>
        <Form.Range 
          min={0} 
          max={100000} 
          step={1000}
          onChange={(e) => onFilterChange('price', e.target.value)}
        />
        <div className="price-labels">
          <span>₹0</span>
          <span>₹100,000</span>
        </div>
      </div>

      <div className="filter-section">
        <h4>Categories</h4>
        <Form.Check 
          type="checkbox"
          label="Necklaces"
          onChange={(e) => onFilterChange('category', 'necklaces', e.target.checked)}
        />
        <Form.Check 
          type="checkbox"
          label="Rings"
          onChange={(e) => onFilterChange('category', 'rings', e.target.checked)}
        />
        <Form.Check 
          type="checkbox"
          label="Earrings"
          onChange={(e) => onFilterChange('category', 'earrings', e.target.checked)}
        />
        <Form.Check 
          type="checkbox"
          label="Bracelets"
          onChange={(e) => onFilterChange('category', 'bracelets', e.target.checked)}
        />
      </div>

      <div className="filter-section">
        <h4>Karat</h4>
        <Form.Check 
          type="checkbox"
          label="24K"
          onChange={(e) => onFilterChange('karat', '24k', e.target.checked)}
        />
        <Form.Check 
          type="checkbox"
          label="22K"
          onChange={(e) => onFilterChange('karat', '22k', e.target.checked)}
        />
        <Form.Check 
          type="checkbox"
          label="18K"
          onChange={(e) => onFilterChange('karat', '18k', e.target.checked)}
        />
      </div>

      <div className="filter-section">
        <h4>Sort By</h4>
        <Form.Select onChange={(e) => onFilterChange('sort', e.target.value)}>
          <option value="newest">Newest</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="popularity">Popularity</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default Filter;
