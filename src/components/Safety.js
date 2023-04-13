import React from 'react'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import Sliderprops from './Sliderprops'
import Solutions from './Solutions'
import Footer from './Footer'
import Testimonials from './Testimonials'
import { Exploresafety } from './Exploresafety'
import Lorem_Epsum_Automotive from './Lorem_Epsum_Automotive'
import Lorem_Safety_img1 from '../assets/img/png/Lorem_Epsum_Safety_img1.png';
import Lorem_Safety_img2 from '../assets/img/png/Lorem_Epsum_Safety_img2.png';
import Lorem_Safety_img3 from '../assets/img/png/Lorem_Epsum_Safety_img3.png';
import SolutionsHero from './SolutionsHero'
const Safety = () => {
  return (
    <div>
      <SolutionsHero heroheading="Safety & Security AI" hero_h2_w="safety_h2_width" />
      <Hero />
      <Lorem_Epsum_Automotive Lorem_Epsum_img1={Lorem_Safety_img1} Lorem_Epsum_img2={Lorem_Safety_img2} Lorem_Epsum_img3={Lorem_Safety_img3} />
      <Lorem_Epsum_Automotive />
      <Testimonials />
      <Exploresafety />
      <Turpis />
      <Footer /></div>
  )
}

export default Safety