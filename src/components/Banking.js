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
import SolutionsHero from './SolutionsHero'
const Banking = () => {
    return (
        <div> <SolutionsHero heroheading="Finance Ai" hero_h2_w="Banking_h2_width"  />
            <Lorem_Epsum_Automotive />
            <Testimonials />
            <Explorebanking />
            <Turpis />
            <Footer />
            
        </div>
    )
}

export default Banking