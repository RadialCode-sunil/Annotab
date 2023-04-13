import React from 'react'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import Sliderprops from './Sliderprops'

import Solutions from './Solutions'
import Footer from './Footer'
import Testimonials from './Testimonials'
import { Exploreretails } from './Exploreretails'
import Lorem_Epsum_Automotive from './Lorem_Epsum_Automotive'
const Retail = () => {
    return (
        <div> <Hero />
            <Lorem_Epsum_Automotive />
            <Testimonials />
            <Exploreretails />
            <Turpis />
            <Footer />
        </div>
    )
}

export default Retail