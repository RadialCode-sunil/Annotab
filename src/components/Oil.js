import React from 'react'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import Sliderprops from './Sliderprops'

import Solutions from './Solutions'
import Footer from './Footer'
import Testimonials from './Testimonials'
import Lorem_Epsum_Automotive from './Lorem_Epsum_Automotive'
import Exploreoil from '../Exploreoil'
import SolutionsHero from './SolutionsHero'
const Oil = () => {
  return (
    <div><SolutionsHero heroheading="Oil & Gas AI" hero_h2_w="Oil_h2_width" />
      <Lorem_Epsum_Automotive />
      <Testimonials />
      <Turpis />
      <Exploreoil />
      <Footer /></div>
  )
}

export default Oil