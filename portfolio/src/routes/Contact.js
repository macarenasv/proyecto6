import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import FormContact from '../components/FormContact'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Contact Me" text="Let's chat!"/> 
      <FormContact/>
      <Footer/>
    </div>
  )
}

export default Contact;