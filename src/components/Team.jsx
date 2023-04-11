import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import Team_boy_img_1 from '../assets/img/png/Team_boy_img_1.png';
import Team_boy_img_2 from '../assets/img/png/Team_boy_img_2.png';
import Team_boy_img_3 from '../assets/img/png/Team_boy_img_3.png';
const Team = () => {
    var Team_slider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4.26,
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
        <section className='py-5'>
            <Container>
                <h2 className=' ff_Medium fw_500 fs_3xl white text-center'>Team</h2>
                <p className=' ff_Book fw_300 fs_sm white text-center Team_p_w mx-auto'>
                    Risus suspendisse mauris sit placerat et interdum. Mauris tellus et visssg. Urna diam massa varius orci porta.
                </p>
                <Slider {...Team_slider}>
                    <div>
                        <div className='Team_slider_box'>
                            
                       </div>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>

            </Container>
        </section>
    )
}

export default Team