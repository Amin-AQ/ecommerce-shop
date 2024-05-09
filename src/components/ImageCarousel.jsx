import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(intervalId); // Cleanup function to clear interval on component unmount
    };
  }, [currentIndex]);

  return (
    <div style={{ position: 'relative', height: '70vh', width: '100%', overflow: 'hidden' }}>
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      
      {/* Prev Button */}
      <a href="#" onClick={goToPrevSlide} style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', zIndex: '1', display: 'block', width: '40px', height: '40px', backgroundColor: 'white', textAlign: 'center', lineHeight: '40px', borderRadius: '4px' }}>&lt;</a>
      
      {/* Next Button */}
      <a href="#" onClick={goToNextSlide} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', zIndex: '1', display: 'block', width: '40px', height: '40px', backgroundColor: 'white', textAlign: 'center', lineHeight: '40px', borderRadius: '4px' }}>&gt;</a>
    </div>
  );
};

export default ImageCarousel;
