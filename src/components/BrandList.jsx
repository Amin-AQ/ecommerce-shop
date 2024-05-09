import React from 'react';
import BrandCard from './BrandCard';

const BrandList = ({ products }) => {

  const uniqueBrandNames = [...new Set(products.map(product => product.brandName))];

  return (
    <div className="brands-list selected-products-grid max-w-7xl mx-auto">
      {uniqueBrandNames.map((brandName, index) => (
        <BrandCard key={index} brand={{ brandName }} />
      ))}
    </div>
  );
};

export default BrandList;
