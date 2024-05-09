import React, { useState } from 'react';
import axios from 'axios';
import { ProductElement } from '../components';
import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
export const BrandPageLoader = async ({ params }) => {
  const { brandName } = params;

  try {
    // Fetch all products
    const response = await axios.get(`http://localhost:8080/products`);

    // Filter products based on the provided brandName
    const filteredProducts = response.data.filter(product => product.brandName === brandName);

    return filteredProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // Return empty array in case of error
  }
};

function BrandProducts() {

  const productData = useLoaderData();
 

  return (
    <div className="selected-products-grid max-w-7xl mx-auto">
      {productData.map((product) => (
        <ProductElement
          key={product.id}
          id={product.id}
          title={product.name}
          image={product.imageUrl}
          rating={product.rating}
          price={product.price.current.value}
        />
      ))}
    </div>
  );
}


export default BrandProducts;
