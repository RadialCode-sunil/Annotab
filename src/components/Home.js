import React from 'react'
import Resources from './Resources'
import Team from './Team'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import Solutions from './Solutions'

const Home = () => {
    return (
        <div className='bg_darkblue'>
            <Hero />
            <Solutions/>
            <Resources />
            <Team />
            <Process />
            <Turpis/>
        </div>
    )
}

export default Home