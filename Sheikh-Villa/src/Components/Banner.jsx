import React, { useState, useEffect } from 'react';
import BannerContent from './BannerContent';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const navigate = useNavigate();

  const slideData = [
    {
      ID: 1,
      image: 'https://i.ibb.co/pdv5JHQ/cyber-thum-2.jpg',
    },
    {
      ID: 2,
      image: 'https://i.ibb.co/X8rtXsr/cyber-thum-1.jpg',
    },
    {
      ID: 3,
      image: 'https://i.ibb.co/sypjc1N/ICT.jpg',
    },
    {
      ID: 4,
      image: 'https://i.ibb.co/ggrWJdg/history-2.jpg',
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
            <a href={`#slide${currentSlide}`} className="btn btn-circle" onClick={prevSlide}>
              ❮
            </a>
            <a href={`#slide${currentSlide}`} className="btn btn-circle" onClick={nextSlide}>
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
