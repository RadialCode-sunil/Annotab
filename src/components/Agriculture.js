import React from 'react'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import Sliderprops from './Sliderprops'
import Solutions from './Solutions'
import Footer from './Footer'
import Testimonials from './Testimonials'
import { Agriculturecases } from './Agriculturecases'
import Agricultures2 from './Agricultures2'
import SolutionsHero from './SolutionsHero'
const Agriculture = () => {
    return (
        <div>
           <SolutionsHero firstheading="Agriculture AI" hero_h2_w="Agriculture_h2_width"  />
            <Agricultures2/>
            <Testimonials />
            <Agriculturecases />
            <Turpis />
            <Footer />
        </div>)
}

export default Agriculture