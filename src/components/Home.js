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
import { CustomApplication } from '../components/CustomApplications'
import AiAnnotation from './AiAnnotation'
import { Latest } from './Latest'


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
            <CustomApplication />
            <AiAnnotation />
            <Latest />
        </div>
    )
}

export default Home