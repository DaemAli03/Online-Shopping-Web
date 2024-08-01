import React from 'react';
import Card from 'react-bootstrap/Card';
import Product1 from '../Assets/product-1.jpg';
import Product2 from '../Assets/product-2.jpg';
import Product3 from '../Assets/product-3.jpg';
import Product4 from '../Assets/product-4.jpg';
import Product5 from '../Assets/product-5.jpg';
import Product6 from '../Assets/product-6.jpg';
import Product7 from '../Assets/product-7.jpg';
import Product8 from '../Assets/product-8.jpg';
import Product10 from '../Assets/product10.jpeg';
import Product11 from '../Assets/product11.jpg';
import Product12 from '../Assets/product12.jpeg';
import Product9 from '../Assets/product9.jpeg';
import './Products.css';
export default function Products() {
return (
    <>
        <div className='Desc'>
            <h3>
                Featured Products
            </h3>
            <h1>
                Our Products
            </h1>
            <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
            </p>
        </div>
        <div className='container d-flex mt-5 justify-content-around'>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={Product1} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>BELL PEPPER</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $10.00
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={Product2} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>STRAWBERRY</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $30.00
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={Product3} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>GREEN BEANS</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $5.00
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={Product4} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>PURPLE CABBAGE</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $20.00
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
        <div className='container d-flex mt-4 justify-content-around'>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={Product5} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>TOMATO</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $07.00
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={Product6} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>BROCCLI</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $40.00
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={Product7} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>CARROTS</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $15.00
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={Product8} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>FRUIT JUICE</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $12.00
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
        <div className='container d-flex mt-4 justify-content-around'>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={Product9} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>APPLE</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $23.00
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={Product10} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>GUAVA</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $06.00
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={Product11} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>PINEAPPLE</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $15.00
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={Product12} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>FRUIT JUICE</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $12.00
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
    </>
    
)
}
