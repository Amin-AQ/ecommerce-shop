import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BrandCard.css'; 

const BrandCard = ({ brand }) => {
  return (
    <div className="Card">
      <Link to={`/shop/brand/${brand.brandName}`} onClick={() => window.scrollTo(0, 0)}>
        <div className="card-content">
          {/* Styled image with a class */}
          <img className="brand-image" src={`src/assets/${brand.brandName}.png`} alt={brand.brandName} />
          {/* Styled paragraph with a class */}
          <p className="name text-3xl font-bold text-accent-content">{brand.brandName}</p>
        </div>
      </Link>
    </div>
  );
};

export default BrandCard;
