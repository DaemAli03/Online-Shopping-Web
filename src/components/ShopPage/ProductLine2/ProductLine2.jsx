import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import veg1 from '../Assets/veg1.jpeg';
import veg2 from '../Assets/veg2.jpeg';
import veg3 from '../Assets/veg3.jpeg';
import veg4 from '../Assets/veg4.jpeg';
import veg5 from '../Assets/veg5.jpeg';
import veg6 from '../Assets/veg6.jpeg';
import veg7 from '../Assets/veg7.jpeg';
import veg8 from '../Assets/veg8.jpeg';
export const ProductLine2 = ({addToCart}) => {
return (
    <>
        <div className='Desc' style={{marginTop:'55px'}}>
            <h3 style={{fontSize:'60px'}}>
                VEGETABLES
            </h3>
        </div>
        <div className='container d-flex mt-5 justify-content-around'>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={veg1} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>Tomato</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $10.00
                    </Card.Text>
                    <Button variant="success" onClick={()=>addToCart()}>Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={veg2} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>Broccli</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $30.00
                    </Card.Text>
                    <Button variant="success" onClick={()=>addToCart()}>Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={veg3} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>Green Cabbage</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $5.00
                    </Card.Text>
                    <Button variant="success" onClick={()=>addToCart()}>Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={veg4} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>Spinach</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $20.00
                    </Card.Text>
                    <Button variant="success" onClick={()=>addToCart()}>Add To Cart</Button>
                </Card.Body>
            </Card>
        </div>
        <div className='container d-flex mt-4 justify-content-around'>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={veg5} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>Cauliflower</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $07.00
                    </Card.Text>
                    <Button variant="success" onClick={()=>addToCart()}>Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={veg6} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>Bittergourd</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $40.00
                    </Card.Text>
                    <Button variant="success" onClick={()=>addToCart()}>Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={veg7} style={{height:'170px'}}/>
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>Capsicum</Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                        $15.00
                    </Card.Text>
                    <Button variant="success" onClick={()=>addToCart()}>Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={veg8} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>Fistolosus</Card.Title>
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