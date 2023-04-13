import React from 'react'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import Sliderprops from './Sliderprops'

import Solutions from './Solutions'
import Testimonials from './Testimonials'
import Footer from './Footer'
import Lorem_Epsum_Automotive from './Lorem_Epsum_Automotive'
<<<<<<< HEAD
import Exploeautomative from './Exploeautomative'
=======
import SolutionsHero from './SolutionsHero'
>>>>>>> 9324eafdc944d844d0b15e13b05e116d6bbedf01
const Automotive = () => {
    return (
        <div> <SolutionsHero heroheading="Automotive AI" hero_h2_w="Automotive_h2_w" />
            <Lorem_Epsum_Automotive />
            <Testimonials />
            <Exploeautomative/>
            <Turpis />
            <Footer />
        </div>
    )
}

export default Automotive