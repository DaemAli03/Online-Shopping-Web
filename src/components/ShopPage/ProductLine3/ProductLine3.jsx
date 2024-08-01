import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ft1 from '../Assets/ft1.jpeg';
import ft2 from '../Assets/ft2.jpeg';
import ft3 from '../Assets/ft3.jpeg';
import ft4 from '../Assets/ft4.jpeg';
import ft5 from '../Assets/ft5.jpeg';
import ft6 from '../Assets/ft6.jpeg';
import ft7 from '../Assets/ft7.jpeg';
import ft8 from '../Assets/ft8.jpeg';
export const ProductLine3 = ({addToCart}) => {
return (
    <>
        <div className='Desc' style={{marginTop:'55px'}}>
            <h3 style={{fontSize:'60px'}}>
                FRUITS
            </h3>
        </div>
        <div className='container d-flex mt-5 justify-content-around'>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={ft1} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>Orange</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $10.00
                    </Card.Text>
                    <Button variant="success" onClick={()=>addToCart()}>Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={ft2} style={{height:'200px'}}/>
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>Strawberry</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $30.00
                    </Card.Text>
                    <Button variant="success" onClick={()=>addToCart()}>Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={ft3} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>Grapes</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $5.00
                    </Card.Text>
                    <Button variant="success" onClick={()=>addToCart()}>Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={ft4} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>Dragon Fruit</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $20.00
                    </Card.Text>
                    <Button variant="success" onClick={()=>addToCart()}>Add To Cart</Button>
                </Card.Body>
            </Card>
        </div>
        <div className='container d-flex mt-4 justify-content-around'>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={ft5} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>Black Berry</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $07.00
                    </Card.Text>
                    <Button variant="success" onClick={()=>addToCart()}>Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={ft6} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>Water Mellon</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $40.00
                    </Card.Text>
                    <Button variant="success" onClick={()=>addToCart()}>Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={ft7} style={{height:'170px'}}/>
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>Pineapple</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $15.00
                    </Card.Text>
                    <Button variant="success" onClick={()=>addToCart()}>Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={ft8} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>Lychee</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $12.00
                    </Card.Text>
                    <Button variant="success" onClick={()=>addToCart()}>Add To Cart</Button>
                </Card.Body>
            </Card>
        </div>
    </>
)
}
