import React from 'react'
import Resources from './Resources'
import Team from './Team'
import Hero from './Hero'

const Home = () => {
    return (
        <div className='bg_darkblue'>
            <Hero/>
            <Resources />
            <Team />
            <Process />
        </div>
    )
}

export default Home