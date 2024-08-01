import React from 'react'
import ContactUs from '../components/ContactPage/Contact/ContactUs'
import HeroSection from '../components/ContactPage/HeroScetion/HeroSection'
import Message from '../components/ContactPage/Message/Message'
import Footer from '../components/Footer/Footer'
export default function Contact() {
  return (
    <div>
      <HeroSection/>
      <ContactUs/>
      <Message/>
      <Footer/>
    </div>
  )
}
