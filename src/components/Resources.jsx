import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";

const Resources = () => {
    var Resources_slider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        nextArrow: ".next",
        prevArrow: ".back",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    };
    return (
        <section>
            <Container className=''>
                <div className=' d-flex flex-column flex-lg-row align-items-lg-center'>
                    <div>
                        <h2 className=' ff_Medium fw_400 fs_3xl white'>
                            Resources
                        </h2>
                        <p className=' ff_Book fw_400 fs_sm white w-75 '>
                            Magna scelerisque amet adipiscing diam ac justo. Elementum mattis aenean malesuada mauris eget platea id. Ullamcorper.
                        </p>
                    </div>
                    <div className=' d-flex align-items-center'>
                        <div className='Resources_Blogs px-3'>
                            <p className='ff_Medium fw_400 fs_xl white'>
                                Blogs
                            </p></div>
                        <div className='Resources_Documentation'>
                            <p className='ff_Medium fw_400 fs_xl white ps-5 ms-4 '>
                                Documentation
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <Slider {...Resources_slider}>
                <div>
                    <div className='Resources_slider_box'>
                        <p className=' ff_Medium fw_400 fs_lg white'>Phasellus convallis</p>
                        <p className=' ff_Book fw_400 fs_sm grey opacity_7'>Euismod quisque semper ut sem. Enim vivamus in tortor malesuada lectus.</p>

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

        </section>
    )
}

export default Resources