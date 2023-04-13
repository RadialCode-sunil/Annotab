import React from 'react'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import Sliderprops from './Sliderprops'
import Solutions from './Solutions'
import Footer from './Footer'
import Testimonials from './Testimonials'
import Lorem_Epsum_Automotive from './Lorem_Epsum_Automotive'
import Lorem_Telecommunications_img1 from '../assets/img/png/Lorem_Epsum_Telecommunications_img1.png';
import Lorem_Telecommunications_img2 from '../assets/img/png/Lorem_Epsum_Telecommunications_img2.png';
import Lorem_Telecommunications_img3 from '../assets/img/png/Lorem_Epsum_Telecommunications_img3.png';

const Telecommunications = () => {
  return (
    <div><Hero />
      <Lorem_Epsum_Automotive Lorem_Epsum_img1={Lorem_Telecommunications_img1} Lorem_Epsum_img2={Lorem_Telecommunications_img2} Lorem_Epsum_img3={Lorem_Telecommunications_img3} />
      <Testimonials />
      <Turpis />
      <Footer /></div>
  )
}

export default Telecommunications