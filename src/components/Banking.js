import React from 'react'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import Sliderprops from './Sliderprops'

import Solutions from './Solutions'
import Footer from './Footer'
import { Explorebanking } from './Explorebanking'
import Testimonials from './Testimonials'
import Lorem_Epsum_Automotive from './Lorem_Epsum_Automotive'
import Lorem_Banking_img1 from '../assets/img/png/Lorem_Epsum_Banking_img1.png';
import Lorem_Banking_img2 from '../assets/img/png/Lorem_Epsum_Banking_img2.png';
import Lorem_Banking_img3 from '../assets/img/png/Lorem_Epsum_Banking_img3.png';
import SolutionsHero from './SolutionsHero'


const Banking = () => {
    return (
        <div> <SolutionsHero heroheading="Finance Ai" hero_h2_w="Banking_h2_width" />
            <Hero />
            <Lorem_Epsum_Automotive Lorem_Epsum_img1={Lorem_Banking_img1} Lorem_Epsum_img2={Lorem_Banking_img2} Lorem_Epsum_img3={Lorem_Banking_img3} />
            <Lorem_Epsum_Automotive />
            <Testimonials />
            <Explorebanking />
            <Turpis />
            <Footer />

        </div>
    )
}

export default Banking