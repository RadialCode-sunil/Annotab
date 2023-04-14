import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import tick from '../assets/img/svg/tick.svg';
import Slider from "react-slick"
import Green_btn_2 from './Green_btn_2';
export const Pricing = () => {
    var price_as = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,


        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    arrows: false,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,

                }
            }]
    };
    return (
        <section className=' pt-5'>
            <div className=' d-flex flex-column align-items-center pt-5'>
                <p className=' ff_Medium text-center fs_3xl grey '>Pricing</p>
                <p className=' ff_Book fs_sm grey text-center min_w_524 pb-5'>Ultricies in integer semper pharetra. vestibulum.Ultricies in integer semper pharetra. vestibulum.</p>
            </div>
            <Container>
                <Slider {...price_as}>


                    <div className=' pb -5 position-relative '>
                        {/* <div className=' position-absolute shadow_back'></div> */}

                        <div className='normal_box normal_shadow p-5 ms-3'>
                            <p className=' ff_Medium mb-0 fs_md text-white'>Normal</p>
                            <p className='mb-0 ff_Medium fs_2xl text-white'><span className=' font-monospace'>&#x24;</span>50</p>
                            <p className=' ff_Medium fs_md text-white mx_280_md'>Quis commodo viverra elementum duis.</p>
                            <hr className='normal_line' />
                            <div className=' d-flex align-items-center pt-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Video Annotation</p>
                            </div>
                            <div className=' d-flex align-items-center pt-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>image Annotation</p>
                            </div>
                            <div className=' d-flex align-items-center pt-3 pb-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Text Annotation</p>
                            </div>
                            <hr className='normal_line mt-4' />
                            {/* <a className=' intersted_btn d-inline-block ff_Bold fs_sm sky mt-3' href="#">Interested</a> */}
                            <Green_btn_2 Green_btn_2text="Interested" />
                        </div>
                    </div>
                    <div>
                        <div className='pt -4 pt-md-0'>
                            <div className='normal_box normal_shadow p-5 z-3 ms-3'>
                                <p className=' ff_Medium mb-0 fs_md text-white'>Rapid</p>
                                <p className='mb-0 ff_Medium fs_2xl text-white'><span className='font-monospace'>$</span> 90</p>
                                <p className=' ff_Medium fs_md text-white mx_280_md'>Vitae sollicitudin arcu pretium nec cras.</p>
                                <hr className='normal_line' />
                                <div className=' d-flex align-items-center pt-3'>
                                    <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                    <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Video Annotation</p>
                                </div>
                                <div className=' d-flex align-items-center pt-3'>
                                    <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                    <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>image Annotation</p>
                                </div>
                                <div className=' d-flex align-items-center pt-3 pb-3'>
                                    <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                    <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Text Annotation</p>
                                </div>
                                <hr className='normal_line mt-4' />
                                {/* <a className=' intersted_btn d-inline-block ff_Bold fs_sm sky mt-3' href="#">Interested</a> */}
                                <Green_btn_2 Green_btn_2text="Interested" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='pt -4 pt-lg-0'>
                            <div className='normal_box normal_shadow p-5 ms-3'>
                                <p className=' ff_Medium mb-0 fs_md text-white'>Enterprise</p>
                                <p className='mb-0 ff_Medium fs_2xl text-white'><span className='font-monospace'>$</span> 150</p>
                                <p className=' ff_Medium fs_md text-white mx_300_md'>Interdum rhoncus nisl et rutrum tortor.</p>
                                <hr className='normal_line' />
                                <div className=' d-flex align-items-center pt-3'>
                                    <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                    <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Video Annotation</p>
                                </div>
                                <div className=' d-flex align-items-center pt-3'>
                                    <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                    <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>image Annotation</p>
                                </div>
                                <div className=' d-flex align-items-center pt-3 pb-3'>
                                    <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                    <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Text Annotation</p>
                                </div>
                                <hr className='normal_line mt-4' />
                                {/* <a className=' intersted_btn d-inline-block ff_Bold fs_sm sky mt-3' href="#">Interested</a> */}
                                <Green_btn_2 Green_btn_2text="Interested" />
                            </div>
                        </div>
                    </div>

                </Slider>
            </Container>
        </section>
    )
}
