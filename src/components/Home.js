import React from 'react'
import NavBar from './NavBar'
import Resources from './Resources'
import Team from './Team'
import { Turpis } from './Turpis'

const Home = () => {
    return (
        <div className='bg_darkblue'>
            <NavBar />
            <Resources />
            <Team />
            <Turpis/>
        </div>
    )
}

export default Home