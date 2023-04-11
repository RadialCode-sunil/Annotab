import React from 'react'
import NavBar from './NavBar'
import Resources from './Resources'
import Team from './Team'
import Process from './Process'

const Home = () => {
    return (
        <div className='bg_darkblue'>
            <NavBar />
            <Resources />
            <Team />
            <Process />
        </div>
    )
}

export default Home