import React from 'react'
import Resources from './Resources'
import { Pricing } from './Pricing'
import Team from './Team'
import Tortor from './Tortor'
import Product from './Product'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import Sliderprops from './Sliderprops'

import Solutions from './Solutions'
import Footer from './Footer'
import Section_2_slider from './Section_2_slider'
import NavBar from './NavBar'
import { Classes } from './Classes'
import { CustomApplication } from '../components/CustomApplications'
import AiAnnotation from './AiAnnotation'
import { Latest } from './Latest'
// import { Accordion } from 'react-bootstrap-accordion'
// import Footer from './Footer'
import Testimonials from './Testimonials'

const Home = () => {
    return (
        <div className='bg_darkblue overflow-hidden'>

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
 
            <CustomApplication />
            <AiAnnotation />
            <Latest />
            <Challenges />
            <Footer />
            <Section_2_slider />
            <CustomApplication />
            <AiAnnotation />
            <Latest />
            <Process />
            <Turpis />
        </div>
    )
}

export default Home