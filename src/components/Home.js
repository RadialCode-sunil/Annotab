import React from 'react'
import NavBar from './NavBar'
import Resources from './Resources'
import Team from './Team'
import Tortor from './Tortor'
import Product from './Product'

const Home = () => {
    return (
        <div className='bg_darkblue'>
            {/* <NavBar />
            <Resources />
            <Team /> */}
            <Tortor />
            <Product></Product>
        </div>
    )
}

export default Home