import React from 'react'
import HeroSection from '../components/AboutPage/HeroSection/HeroSection'
import Herosection2 from '../components/AboutPage/HeroSection2/Herosection2'
import Section from '../components/AboutPage/Section/Section'
import Section2 from '../components/AboutPage/Section2/Section2'
import Testimony from '../components/AboutPage/Testimony/Testimony'
import Footer from '../components/Footer/Footer'
export default function About() {
  return (
    <div>
        <HeroSection/>
        <Section2/>
        <Herosection2/>
        <Testimony/>
        <Section/>
        <Footer/>
    </div>
  )
}
