import React from 'react'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import Sliderprops from './Sliderprops'
import Solutions from './Solutions'
import Footer from './Footer'
import Exploreaerospaces from './Exploreaerospaces'
import { Defancegrid } from './Defancegrid'
import Aerospaces2 from './Aerospaces2'
import Testimonials from './Testimonials'
import SolutionsHero from './SolutionsHero'
const Aerospace = () => {
    return (
        <div> <SolutionsHero heroheading="Aerospace & Defense Ai" hero_h2_w="Aerospace_h2_width"  />
            <Aerospaces2 />
            <Testimonials />
            <Defancegrid /> 
            <Turpis />
            <Footer />

        </div>
    )
}

export default Aerospace