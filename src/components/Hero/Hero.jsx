import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import bg1 from '../Assets/Img1.jpg';
import bg2 from '../Assets/Img2.jpg';
import './Hero.css';
export default function Hero() {
return (
    <div>
        <Carousel>
            <Carousel.Item>
                <Image src={bg1} alt="First slide"  style={{ width: '100%', height: '95vh', filter: 'brightness(0.7)' }}/>
                <Carousel.Caption className='caption-1'>
                    <h3>We Serve Fresh Fruits and Vegetables</h3>
                    <p>We Deliver Organic Vegetables and Fruits.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={bg2} alt="Second slide"  style={{ width: '100%', height: '95vh',filter: 'brightness(0.7)' }}/>
                <Carousel.Caption className='caption-2'>
                    <h3>100% Fresh and Organic Fruits</h3>
                    <p>We Deliver Organic Vegetables and Fruits.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
)
}
