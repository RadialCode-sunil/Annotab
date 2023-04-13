import React from 'react'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import Sliderprops from './Sliderprops'

import Solutions from './Solutions'
import Footer from './Footer'
import Best_data from './Best_data'
import { Navbar } from 'react-bootstrap'
import Data_2 from './Data_2'
import { Blog } from './Blog'
import { CustomApplication } from './CustomApplications'
const Blogs = () => {
    return (
        <div>
            <Blog />
            <CustomApplication/>
            <Turpis />
            <Footer />
        </div>
    )
}

export default Blogs