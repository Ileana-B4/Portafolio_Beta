import React from 'react'; 
import Carousel from 'react-bootstrap/Carousel';

const CarouselContainer = () => {
    return(
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/c3sYPHz/image-2.jpg"
          alt="CCH"
        />
        <Carousel.Caption>
          <h3>XXXIV Concurso Intra-CCH de Matemáticas</h3>
          <p>CCH-Naucalpan</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Primer Lugar</h3>
          <p>XXXIV Concurso Intra-CCH de Matemáticas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Olimpiada Estatal de Biologia</h3>
          <p>
            UAMEX estado de México
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Tercer Lugar OEB</h3>
          <p>Olimpiada Estatal de Biologia</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Prototipo de Robot Minisumo</h3>
          <p>Con ayuda del ingeniero Hugo Angeles</p>
        </Carousel.Caption>
      </Carousel.Item>     
    </Carousel>
    )

}

export default CarouselContainer;