import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import Team_boy_img_1 from '../assets/img/png/Team_boy_img_1.png';
import Team_boy_img_2 from '../assets/img/png/Team_boy_img_2.png';
import Team_boy_img_3 from '../assets/img/png/Team_boy_img_3.png';
import green_light from '../assets/img/png/green_light.png'
const Team = () => {
    var Team_slider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.18,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: "100px",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.25,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1.25,
                    slidesToScroll: 2,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    centerMode: false,
                    centerPadding: "0px",
                }
            }]
    };
    return (
        <section className='py-5 position-relative overflow-hidden'>
            <img className=' position-absolute Team_green_light' src={green_light} alt="green_light" />
            <Container>
                <h2 className=' ff_Medium fw_500 fs_3xl white text-center'>Team</h2>
                <p className=' ff_Book fw_300 fs_sm white text-center Team_p_w mx-auto pt-3'>
                    Risus suspendisse mauris sit placerat et interdum. Mauris tellus et visssg. Urna diam massa varius orci porta.
                </p>

                <Slider {...Team_slider} className='pt-5'>
                    <div>
                        <div className='Team_slider_box position-relative mx-3'>
                            <img className=' w-100 Team_slider_box_img' src={Team_boy_img_2} alt="Boy" />
                            <div className='Team_slider_img_box position-absolute'>
                                <p className=' ff_Medium fw_500 fs_lg white'>Et urna nisi lorem</p>
                                <p className=' ff_Book fw_300 fs_sm white opacity_7'>
                                    Libero et fames egestas felis proin in posuere consectetur. Velit turpis etiam quis risus auctor.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='Team_slider_box position-relative mx-3'>
                            <img className=' w-100 Team_slider_box_img' src={Team_boy_img_3} alt="Boy" />
                            <div className='Team_slider_img_box position-absolute'>
                                <p className=' ff_Medium fw_500 fs_lg white'>Et urna nisi lorem</p>
                                <p className=' ff_Book fw_300 fs_sm white opacity_7'>
                                    Libero et fames egestas felis proin in posuere consectetur. Velit turpis etiam quis risus auctor.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='Team_slider_box position-relative mx-3'>
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

            </Container>
        </section>
    )
}

export default Team