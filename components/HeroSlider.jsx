"use client"
import { useState } from 'react';

const HeroSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}

      <button className="prev-btn" onClick={prevSlide}>
        Prev
      </button>
      <button className="next-btn" onClick={nextSlide}>
        Next
      </button>

      <style jsx>{`
        .hero-slider {
          position: relative;
          width: 100%;
          height: 400px;
          overflow: hidden;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          background-size: cover;
          background-position: center;
        }

        .slide.active {
          opacity: 1;
        }

        .slide-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
          text-align: center;
        }

        .prev-btn,
        .next-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #fff;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .prev-btn {
          left: 20px;
        }

        .next-btn {
          right: 20px;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
