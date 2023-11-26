import React, { useState, useEffect } from 'react';
import BannerContent from './BannerContent';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const navigate = useNavigate();

  const slideData = [
    {
      ID: 1,
      image: 'https://i.ibb.co/tXrDn8w/apart-2.png',
    },
    {
      ID: 2,
      image: 'https://i.ibb.co/McGM6fD/apart-3.png',
    },
    {
      ID: 3,
      image: 'https://i.ibb.co/64GPpjs/apart-4.png',
    },
    {
      ID: 4,
      image: 'https://i.ibb.co/G7dwPTc/apart-6.png',
    },
  ];

  const nextSlide = () => {
    const nextIndex = (currentSlide % slideData.length) + 1;
    setCurrentSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 2 + slideData.length) % slideData.length + 1;
    setCurrentSlide(prevIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
      navigate(`#slide${currentSlide}`);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentSlide, navigate, nextSlide]);

  return (
    <div className="carousel w-full">
      {slideData.map((slide) => (
        <div key={slide.ID} className="carousel-item relative w-screen">
          <div id={`slide${slide.ID}`}>
            <BannerContent src={slide.image}></BannerContent>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${currentSlide}`} className="bg-opacity-50 p-3 md:p-6 rounded-full text-xs  md:text-xl bg-black text-white" onClick={prevSlide}>
              ❮
            </a>
            <a href={`#slide${currentSlide}`} className="bg-opacity-50 p-3 md:p-6 rounded-full text-xs  md:text-xl bg-black text-white" onClick={nextSlide}>
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
