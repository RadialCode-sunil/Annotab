import React from 'react'
import Resources from './Resources'
import Team from './Team'
import Hero from './Hero'
import Process from './Process'


const Home = () => {
    return (
        <div className='bg_darkblue'>
            <Hero />
            <Resources />
            <Team />
            <Process/>
        </div>
    )
}

export default Home