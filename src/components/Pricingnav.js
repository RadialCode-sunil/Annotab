import React from 'react'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import Sliderprops from './Sliderprops'
import Solutions from './Solutions'
import Footer from './Footer'
import { Latest } from './Latest'
import Testimonials from './Testimonials'
import Pricingplan from './Pricingplan'
const Pricingnav = () => {
    return (
        <div>
            <Pricingplan/>
            <Latest />
            <Testimonials />
            <Turpis />
            <Footer />
        </div>
    )
}

export default Pricingnav