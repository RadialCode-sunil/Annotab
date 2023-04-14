import React from 'react'
import { Turpis } from './Turpis'
import Hero from './Hero'
import Process from './Process'
import Sliderprops from './Sliderprops'
import Solutions from './Solutions'
import Testimonials from './Testimonials'
import Footer from './Footer'
import Lorem_Epsum_Automotive from './Lorem_Epsum_Automotive'
import Exploeautomative from './Exploeautomative'
import SolutionsHero from './SolutionsHero'
import Lorem_Epsum_Automotive_img_1 from '../assets/img/png/Lorem_Epsum_Automotive_img1.png';
import Lorem_Epsum_Automotive_img_2 from '../assets/img/png/Lorem_Epsum_Automotive_img2.png';
import Lorem_Epsum_Automotive_img_3 from '../assets/img/png/Lorem_Epsum_Automotive_img3.png';



const Automotive = () => {
    return (
        <div> <SolutionsHero heroheading="Automotive AI" hero_h2_w="Automotive_h2_w" />
            <Lorem_Epsum_Automotive Lorem_Epsum_img1={Lorem_Epsum_Automotive_img_1} Lorem_Epsum_img2={Lorem_Epsum_Automotive_img_2} Lorem_Epsum_img3={Lorem_Epsum_Automotive_img_3} />
            <Testimonials />
            <Exploeautomative />
            <Turpis />
            <Footer />
        </div>
    )
}

export default Automotive