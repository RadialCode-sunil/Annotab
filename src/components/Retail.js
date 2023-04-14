import React from 'react'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import Sliderprops from './Sliderprops'

import Solutions from './Solutions'
import Footer from './Footer'
import Testimonials from './Testimonials'
import { Exploreretails } from './Exploreretails'
import Lorem_Epsum_Automotive from './Lorem_Epsum_Automotive'
import Lorem_Retail_img1 from '../assets/img/png/Lorem_Epsum_Retail_img1.png';
import Lorem_Retail_img2 from '../assets/img/png/Lorem_Epsum_Retail_img2.png';
import Lorem_Retail_img3 from '../assets/img/png/Lorem_Epsum_Retail_img3.png';
import SolutionsHero from './SolutionsHero'


const Retail = () => {
    return (
        <div>
            <SolutionsHero firstheading="Retail" middleHalf="&" thirdHalf="Ecommerce AI" hero_h2_w="Retail_h2_width" />
            <Lorem_Epsum_Automotive Lorem_Epsum_img1={Lorem_Retail_img1} Lorem_Epsum_img2={Lorem_Retail_img2} Lorem_Epsum_img3={Lorem_Retail_img3} />
            <Testimonials />
            <Exploreretails />
            <Turpis />
            <Footer />
        </div>
    )
}

export default Retail