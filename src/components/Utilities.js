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
import Lorem_Utilities_img1 from '../assets/img/png/Lorem_Epsum_Utilities_img1.png';
import Lorem_Utilities_img2 from '../assets/img/png/Lorem_Epsum_Utilities_img2.png';
import Lorem_Utilities_img3 from '../assets/img/png/Lorem_Epsum_Utilities_img3.png';

const Utilities = () => {
  return (
    <div><Hero />
      <Lorem_Epsum_Automotive Lorem_Epsum_img1={Lorem_Utilities_img1} Lorem_Epsum_img2={Lorem_Utilities_img2} Lorem_Epsum_img3={Lorem_Utilities_img3} />

      <Testimonials />
      <Exploreutilites />
      <Turpis />
      <Footer /></div>
  )
}

export default Utilities