import React from 'react'
import NavBar from './NavBar'
import Resources from './Resources'
import { Pricing } from './Pricing'

const Home = () => {
    return (
        <div className='bg_darkblue'>
            <NavBar />
            <Resources />
            <Pricing />
        </div>
    )
}

export default Home