import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import WorkCard from '../components/WorkCard'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Proyectos" text="" /> 
      <WorkCard/>
      <Footer/>
      
    </div>
  )
}

export default Project;