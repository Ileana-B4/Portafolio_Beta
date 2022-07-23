import React from 'react'; 
import Carousel from 'react-bootstrap/Carousel';
import "./CarouselContainer.css"
import image1 from "../../media/image-1.jpg"
import image2 from "../../media/image-2.jpg"
import image3 from "../../media/image-3.jpg"
import image4 from "../../media/image-4.jpg"
import image5 from "../../media/image-5.png"

const CarouselContainer = () => {
    return(
      <div className="carousel-container">
      <Carousel>
      <Carousel.Item>
        <img
          className="image"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    )

}

export default CarouselContainer;