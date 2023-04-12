import React from 'react'
import Resources from './Resources'
import { Pricing } from './Pricing'
import Team from './Team'
import Tortor from './Tortor'
import Product from './Product'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import { Accordion } from 'react-bootstrap-accordion'

import Footer from './Footer'
import Testimonials from './Testimonials'
import Exploreagriculture from './Exploreagriculture'

const Home = () => {
    return (
        <div className='bg_darkblue'>

            <Resources />
            <Pricing />
            <Resources />
            <Team />
            <Tortor />
            <Product/>
            <Hero />
            <Resources />
            <Team />
            <Process />
            <Turpis />
            <Exploreagriculture />
        </div>
    )
}

export default Home