import React from 'react'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import Sliderprops from './Sliderprops'

import Solutions from './Solutions'
import Footer from './Footer'
import Testimonials from './Testimonials'
import Lorem_Epsum_Automotive from './Lorem_Epsum_Automotive'
import Lorem_Oil_img1 from '../assets/img/png/Lorem_Epsum_Oil_img1.png';
import Lorem_Oil_img2 from '../assets/img/png/Lorem_Epsum_Oil_img2.png';
import Lorem_Oil_img3 from '../assets/img/png/Lorem_Epsum_Oil_img3.png';
import Exploreoil from '../Exploreoil'
import SolutionsHero from './SolutionsHero'


const Oil = () => {
  return (
    <div>
      <Hero />
      <Lorem_Epsum_Automotive Lorem_Epsum_img1={Lorem_Oil_img1} Lorem_Epsum_img2={Lorem_Oil_img2} Lorem_Epsum_img3={Lorem_Oil_img3} />
      <SolutionsHero heroheading="Oil & Gas AI" hero_h2_w="Oil_h2_width" />
      <Lorem_Epsum_Automotive />
      <Testimonials />
      <Turpis />
      <Exploreoil />
      <Footer /></div>
  )
}

export default Oil