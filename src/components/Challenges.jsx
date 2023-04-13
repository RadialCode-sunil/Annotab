import React from 'react'
import Slider from "react-slick";
import Sliderprops from './Sliderprops'
import bigcrowed from '../assets/img/png/bigcrowed.png'
import crowedcar from '../assets/img/png/crowedcar.png'
import cyclecar from '../assets/img/png/cyclecar.png'
import { Container, Row, Col } from 'react-bootstrap';

const Challenges = () => {
    var Team_slider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        nextArrow: ".next",
        prevArrow: ".back",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3.25,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2.25,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1.03,
                    slidesToScroll: 1
                }
            }]
    };
    return (
        <div>
            <Sliderprops sliderimg={bigcrowed} sliderimg2={crowedcar} sliderimg3={cyclecar} />
        </div>
    )
}

export default Challenges