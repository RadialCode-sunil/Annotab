import React from 'react'
import NavBar from './NavBar'
import Resources from './Resources'
import Team from './Team'

const Home = () => {
    return (
        <div className='bg_darkblue'>
            <NavBar />
            <Resources />
            <Team/>
        </div>
    )
}

export default Home