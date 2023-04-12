import React from 'react'
import Resources from './Resources'
import Team from './Team'
import Tortor from './Tortor'
import Product from './Product'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import Sliderprops from './Sliderprops'


const Home = () => {
    return (
        <div className='bg_darkblue'>
            {/* <NavBar /> */}
            <Resources />
            <Team />
            <Tortor />
            <Product></Product>
            <Hero />
            <Resources />
            <Team />
            <Process />
            <Turpis />
            <Sliderprops />
        </div>
    )
}

export default Home