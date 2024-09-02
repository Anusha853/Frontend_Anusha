import React from 'react';
import { Carousel } from 'react-bootstrap';

const PlanCarousel = () => {
  return (
    <Carousel className="plan-carousel-container">
      
      <Carousel.Item>
        <div className="carousel-item-container">
          <div className="carousel-text">
            <h3>Plan 1</h3>
            <p>Unlimited calls, 50GB data, and more. Only $19.99/month.</p>
            <button className="btn btn-primary">Get Plan 1</button>
          </div>
          <img
            className="carousel-image"
            src="/assets/image-plans.jpg"
            alt="First plan"
          />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-item-container">
          <div className="carousel-text">
            <h3>Plan 2</h3>
            <p>Unlimited calls, 100GB data, and more. Only $29.99/month.</p>
            <button className="btn btn-primary">Get Plan 2</button>
          </div>
          <img
            className="carousel-image"
            src="https://via.placeholder.com/600x400.png?text=Plan+2"
            alt="Second plan"
          />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-item-container">
          <div className="carousel-text">
            <h3>Plan 3</h3>
            <p>Unlimited calls, 150GB data, and more. Only $39.99/month.</p>
            <button className="btn btn-primary">Get Plan 3</button>
          </div>
          <img
            className="carousel-image"
            src="https://via.placeholder.com/600x400.png?text=Plan+3"
            alt="Third plan"
          />
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-item-container">
          <div className="carousel-text">
            <h3>Plan 4</h3>
            <p>Unlimited calls, 150GB data, and more. Only $39.99/month.</p>
            <button className="btn btn-primary">Get Plan 4</button>
          </div>
          <img
            className="carousel-image"
            src="https://via.placeholder.com/600x400.png?text=Plan+3"
            alt="Fourth plan"
          />
        </div>
      </Carousel.Item>
    </Carousel>
    
  );
};

export default PlanCarousel;