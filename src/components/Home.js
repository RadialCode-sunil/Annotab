import React from 'react'
import Resources from './Resources'
import { Pricing } from './Pricing'
import Team from './Team'
import Tortor from './Tortor'
import Product from './Product'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import NavBar from './NavBar'
import { Classes } from './Classes'
import Footer from './Footer'
import Testimonials from './Testimonials'

const Home = () => {
    return (
        <div className='bg_darkblue'>
            <NavBar />
            <Resources />
            <Pricing />
            <Classes />
            {/* <NavBar />
            <Resources />
            <Team /> */}
            <Tortor />
            <Product></Product>
            <Hero />
            <Resources />
            <Team />
            <Process />
            <Turpis />
            <Footer />
            <Testimonials />
        </div>
    )
}

export default Home