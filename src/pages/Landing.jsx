import React, { useEffect } from "react";
import "../styles/Landing.css";
import { Hero, ProductElement, Stats, ImageCarousel } from "../components";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import image1 from '../assets/main banner 3.jpg'
import image2 from '../assets/women-eastern.webp'
import image3 from '../assets/women-western.webp'
import image4 from '../assets/women-modest.webp'
import image5 from '../assets/men.webp'
import image6 from '../assets/kids-boy.webp'
import image7 from '../assets/kids-girl.webp'

export const landingLoader = async () => {
  const response = await axios(
    `http://localhost:8080/products?_page=1&_limit=8`
  );
  const data = response.data;

  return { products: data };
};

const Landing = () => {
  
  const { products } = useLoaderData();
  const navigate = useNavigate();
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7
  ];
  return (
    <main>
      <div>
        <ImageCarousel images={images} />
      </div>
      <br/>
      <Stats />

      <div className="selected-products">
        <h2 className="text-6xl text-center my-12 max-md:text-4xl text-accent-content">
          Trending Products
        </h2>
        <div className="selected-products-grid max-w-7xl mx-auto">
          {products.map((product) => (
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
      </div>
    </main>
  );
};

export default Landing;
