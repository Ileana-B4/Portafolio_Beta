import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Slides from './Slides';

const Slider = () => {
  return (
    <div className="carousel-container">
        <div className="carousel-title">
            Mis proyectos 
        </div>

        <Carousel
        arrows
        slidesPerPage={5}
        infinite
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={400}
        slides = {<Slides/>}
        />
    </div>
  );
};

export default Slider; 