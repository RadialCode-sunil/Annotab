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
        slidesToShow: 2.22,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: "95px",
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2.22,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    // centerMode: true,
                    // centerPadding: "0px",
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.10,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerMode: true,
                    centerPadding: "50px",
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: false,
                    centerPadding: "0px",
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    centerMode: false, 
                    centerPadding: "0px",
                }
            },
        ]
    };
    return (
        <section className='py-5 position-relative overflow-hidden'>
            <div className='Team_green_light position-absolute'></div>
            <Container>
                <h2 className=' ff_Medium fw_500 fs_3xl white text-center'>Team</h2>
                <p className=' ff_Book fw_300 fs_sm white text-center Team_p_w mx-auto pt-3'>
                    Risus suspendisse mauris sit placerat et interdum. Mauris tellus et visssg. Urna diam massa varius orci porta.
                </p>
                <div className='Team_slider_visible'>
                    <Slider {...Team_slider} className='pt-5'>
                        <div className=' py-1'>
                            <div className='Team_slider_box position-relative mx-3 overflow-hidden'>
                                <img className=' w-100 Team_slider_box_img' src={Team_boy_img_2} alt="Boy" />
                                <div className='Team_slider_img_box position-absolute'>
                                    <p className=' ff_Medium fw_500 fs_lg white'>Et urna nisi lorem</p>
                                    <p className=' ff_Book fw_300 fs_sm white opacity_7'>
                                        Libero et fames egestas felis proin in posuere consectetur. Velit turpis etiam quis risus auctor.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=' py-1'>
                            <div className='Team_slider_box position-relative mx-3 overflow-hidden'>
                                <img className=' w-100 Team_slider_box_img' src={Team_boy_img_3} alt="Boy" />
                                <div className='Team_slider_img_box position-absolute'>
                                    <p className=' ff_Medium fw_500 fs_lg white'>Et urna nisi lorem</p>
                                    <p className=' ff_Book fw_300 fs_sm white opacity_7'>
                                        Libero et fames egestas felis proin in posuere consectetur. Velit turpis etiam quis risus auctor.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=' py-1'>
                            <div className='Team_slider_box position-relative mx-3 overflow-hidden'>
                                <img className=' w-100 Team_slider_box_img' src={Team_boy_img_1} alt="Boy" />
                                <div className='Team_slider_img_box position-absolute'>
                                    <p className=' ff_Medium fw_500 fs_lg white'>Et urna nisi lorem</p>
                                    <p className=' ff_Book fw_300 fs_sm white opacity_7'>
                                        Libero et fames egestas felis proin in posuere consectetur. Velit turpis etiam quis risus auctor.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </Slider>
                </div>
            </Container>
        </section>
    )
}

export default Team