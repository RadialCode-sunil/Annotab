import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import slider_img from "../assets/img/png/section_2_slider_img.png"

const Section_2_slider = () => {
    var Section_2_slider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 9.80,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6000,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 9.80,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 8.80,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 7.90,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 7.25,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 4.03,
                    slidesToScroll: 1
                }
            }]
    };
    return (
        <section>
            <Slider {...Section_2_slider}>
                <div>
                    <img className=' w-100' src={slider_img} alt="" />
                </div>
                <div>
                    <img className=' w-100' src={slider_img} alt="" />
                </div>
                <div>
                    <img className=' w-100' src={slider_img} alt="" />
                </div>
                <div>
                    <img className=' w-100' src={slider_img} alt="" />
                </div>
                <div>
                    <img className=' w-100' src={slider_img} alt="" />
                </div>
                <div>
                    <img className=' w-100' src={slider_img} alt="" />
                </div>
                <div>
                    <img className=' w-100' src={slider_img} alt="" />
                </div>
                <div>
                    <img className=' w-100' src={slider_img} alt="" />
                </div>
                <div>
                    <img className=' w-100' src={slider_img} alt="" />
                </div>
                <div>
                    <img className=' w-100' src={slider_img} alt="" />
                </div>
        
            </Slider>
        </section>
    )
}

export default Section_2_slider