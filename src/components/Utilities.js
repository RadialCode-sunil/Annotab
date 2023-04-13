import React from 'react'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import Sliderprops from './Sliderprops'
import Solutions from './Solutions'
import Footer from './Footer'
import Testimonials from './Testimonials'
import { Exploreutilites } from './Exploreutilites'
import Lorem_Epsum_Automotive from './Lorem_Epsum_Automotive'
import SolutionsHero from './SolutionsHero'
const Utilities = () => {
  return (
    <div><SolutionsHero heroheading="Utilities AI" hero_h2_w="Utilities_h2_width" />
      <Lorem_Epsum_Automotive />
      <Testimonials />
      <Exploreutilites />
      <Turpis />
      <Footer /></div>
  )
}

export default Utilities