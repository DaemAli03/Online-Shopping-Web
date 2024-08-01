import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import Hero from '../components/ShopPage/Hero/Hero';
import { ProductLine1 } from '../components/ShopPage/ProductLine1/ProductLine1';
import { ProductLine2 } from '../components/ShopPage/ProductLine2/ProductLine2';
import { ProductLine3 } from '../components/ShopPage/ProductLine3/ProductLine3';
export default function Shop() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productName, price) => {
    const product = {
      name: productName,
      price: price,
    };
    setCartItems([...cartItems, product]);
  };
  return (
    <div>
      <Hero/>
      <ProductLine1 addToCart={addToCart}/>
      <ProductLine2 addToCart={addToCart}/>
      <ProductLine3 addToCart={addToCart}/>
      <Footer/>
    </div>
  )
}
