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
import Lorem_Transportation_img1 from '../assets/img/png/Lorem_Epsum_Transportation_img1.png';
import Lorem_Transportation_img2 from '../assets/img/png/Lorem_Epsum_Transportation_img2.png';
import Lorem_Transportation_img3 from '../assets/img/png/Lorem_Epsum_Transportation_img3.png';
import SolutionsHero from './SolutionsHero'


const Transportation = () => {
  return (

    <div>
      <SolutionsHero firstheading="Transportation AI" hero_h2_w="Transport_h2_width" />
      <Lorem_Epsum_Automotive Lorem_Epsum_img1={Lorem_Transportation_img1} Lorem_Epsum_img2={Lorem_Transportation_img2} Lorem_Epsum_img3={Lorem_Transportation_img3} />
      <Testimonials />
      <Exploretransporation />
      <Turpis />
      <Footer />
    </div>
  )
}

export default Transportation