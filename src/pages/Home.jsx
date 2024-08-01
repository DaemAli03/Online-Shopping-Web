import React from 'react'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Hero2 from '../components/Hero2/Hero2'
import Logos from '../components/Logos/Logos'
import Products from '../components/Products/Products'
import Section from '../components/Section/Section'
import Testimony from '../components/Testimony/Testimony'
export default function Home() {
  return (
    <div>
        <Hero/>
        <Section/>
        <Products/>
        <Hero2/>
        <Testimony/>
        <Logos/>
        <Footer/>
    </div>
  )
}
