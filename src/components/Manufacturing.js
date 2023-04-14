import React from 'react'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import Sliderprops from './Sliderprops'

import Solutions from './Solutions'
import Footer from './Footer'
import Explore from './Explore'
import Lorem_Epsum from './Lorem_Epsum'
import Testimonials from './Testimonials'
import SolutionsHero from './SolutionsHero'
const Manufacturing = () => {
    return (
        <div>
            <SolutionsHero firstheading="Manufacturing AI" hero_h2_w="Manufacturing_h2_width" />
            <Lorem_Epsum />
            <Testimonials />
            <Explore/>
            <Turpis />
            <Footer />
        </div>

    )
}

export default Manufacturing