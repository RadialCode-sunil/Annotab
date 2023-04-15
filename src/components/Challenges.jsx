import React from 'react'
import Slider from "react-slick";
import Sliderprops from './Sliderprops'
import bigcrowed from '../assets/img/png/bigcrowed.png'
import crowedcar from '../assets/img/png/crowedcar.png'
import cyclecar from '../assets/img/png/cyclecar.png'
import { Container, Row, Col } from 'react-bootstrap';

const Challenges = () => {

    return (
        <div className='pb-5'>
            <div className='bg_blur_chalange'> 
                
            </div>
            <Sliderprops heading="Challenges with Implementing Generative AI" para="Scelerisque integer egestas nunc egestas. Vestibulum nunc blandit ultrices sit sagittis rutrum sed felis in ullamcorper adipiscing." sliderimg={bigcrowed} sliderimg2={crowedcar} sliderimg3={cyclecar} smallheading1="Sit donec" smallheading2="Commodo" smallheading3="Tellus turpis" smallline1="Volutpat ipsum nunc non e molestie  swssa volutpat mauris." smallline2="Volutpat ipsum nunc non e molestie  swssa." smallline3="Ut lacinia quam nascetur vestibulum dui." smallline4="Rutrum velit erat nulla dolor amet tellus" smallline5="Rutrum velit erat nulla dolor amet tellus" smallline6="Viverra lacus imperdiet sed ut est. Neque venenati." smallline7="Risus hendrerit risus" smallline8="Risus hendrerit risus" smallline9="Laoreet vulputate amet semper lectus est sagittis ac. Ultrices enim volutpat " />
        </div>
    )
}

export default Challenges