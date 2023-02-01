import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import product1 from '../Brand/product1.png'
import product2 from '../Brand/product2.png'
const Brandcarosol = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={product1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={product2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Brandcarosol;