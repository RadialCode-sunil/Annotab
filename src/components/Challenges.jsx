import React from 'react'
import Slider from "react-slick";
import Sliderprops from './Sliderprops'
import bigcrowed from '../assets/img/png/bigcrowed.png'
import crowedcar from '../assets/img/png/crowedcar.png'
import cyclecar from '../assets/img/png/cyclecar.png'
import { Container, Row, Col } from 'react-bootstrap';

const Challenges = () => {

    return (
        <div>
            <Sliderprops heading="Challenges with Implementing Generative AI" para="Scelerisque integer egestas nunc egestas. Vestibulum nunc blandit ultrices sit sagittis rutrum sed felis in ullamcorper adipiscing." sliderimg={bigcrowed} sliderimg2={crowedcar} sliderimg3={cyclecar} smallheading1="Sit donec" smallheading2="Commodo" smallheading3="Tellus turpis" />
        </div>
    )
}

export default Challenges