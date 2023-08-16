"use client"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  const images = [
    { src: '/service1.png', caption: 'Architecture' },
    { src: '/service2.jpg', caption: 'Consultancy' },
  ];

  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      {images.map((image, index) => (
        <div key={index}>
         
          <img className='opacity-150 h-screen' src={image.src} alt={`Slide ${index}`} />
          <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-white text-center bg-black p-2 text-5xl">
              {image.caption}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
