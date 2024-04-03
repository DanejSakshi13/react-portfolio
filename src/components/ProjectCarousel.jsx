import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import "./ProjectCarousel.css"

function CarouselFadeExample() {
  return (
    <Carousel fade controls={false} indicators={false} >


      <Carousel.Item classname="carousel">
          <div className="d-block">
          <img
              className='img'
              src={project1}
              alt="First slide"
              />
          </div>
            
        
      </Carousel.Item>

      <Carousel.Item classname="carousel">
        <div className="d-block">
        <img
        className='img'
          src={project2}
         alt="Second slide"
        />
        </div>
        
      </Carousel.Item>


      <Carousel.Item classname="carousel">
        <div className="d-block">
        <img
          className='img'
          src={project3}
          alt="Third slide"
        />
        </div>
       
      </Carousel.Item>


    </Carousel>
  );
}

export default CarouselFadeExample;
