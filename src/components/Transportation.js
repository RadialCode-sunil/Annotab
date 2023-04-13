import React from 'react'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import Sliderprops from './Sliderprops'
import Testimonials from './Testimonials'
import Solutions from './Solutions'
import Footer from './Footer'
import Exploretransporation from './Exploretransporation'
import Lorem_Epsum_Automotive from './Lorem_Epsum_Automotive'
import SolutionsHero from './SolutionsHero'


const Transportation = () => {
  return (
    <div><SolutionsHero heroheading="Transportation AI" hero_h2_w="Transport_h2_width" />
      <Lorem_Epsum_Automotive />
      <Testimonials />
      <Exploretransporation />
      <Turpis />
      <Footer />
    </div>
  )
}

export default Transportation