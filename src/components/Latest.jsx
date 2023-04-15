import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import tick from '../assets/img/svg/tick.svg'
import Slider from "react-slick"
import Green_btn_2 from './Green_btn_2';

export const Latest = () => {
    var price_sv = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,


        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
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
        <Container>
            <div className='pt-5 text-center justify-content-center d-flex align-items-center flex-column'>
                <div className='d-flex align-items-center mb-5 border_bottom_latest'>
                    <p className=' ff_Medium  fs_xl grey fw_400 mb-0 pe-5 border_bottom_1 pointer'>Basic plans</p>
                    <p className=' ff_Medium  fs_xl grey fw_400 mb-0 ps-2 border_bottom_1 pointer'>Exclusive plans</p>
                </div></div >
            <Slider {...price_sv}>
                {/* 1 */}
                <div className='latest_box latest_shadow  p-4 mx-lg-2 mx-xl-0 text-center'>
                    <p className=' ff_Medium mb-0 fs_md text-white opacity_7'>Normal</p>
                    <p className='mb-0 ff_Medium fs_2xl text-white'><span className='font-monospace'>$</span>50</p>
                    <p className=' ff_Medium fs_md text-white mx_280_md mt-2 mb-4 opacity_7'>Quis commodo viverra elementum duis.</p>
                    <Green_btn_2 Green_btn_2text="Buy now" />
                    <p className=' ff_Bold fs_sm text-white mt-4 opacity_7'>Buy Later</p>
                    <hr className='normal_line' />
                    <div className=' d-flex justify-content-center'>
                        <div>
                            <div className=' d-flex align-items-center   pt-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Video Annotation</p>
                            </div>
                            <div className=' d-flex align-items-center   pt-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>image Annotation</p>
                            </div>
                            <div className=' d-flex align-items-center   pt-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Tellus ut</p>
                            </div>
                            <div className=' d-flex align-items-center   pt-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Diam senectus</p>
                            </div>
                            <div className=' d-flex align-items-center   pt-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>A cras</p>
                            </div>
                            <div className=' d-flex align-items-center   pt-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Et orci vitae et</p>
                            </div>
                            <div className=' d-flex align-items-center   pt-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Suspendisse amet</p>
                            </div>
                            <div className=' d-flex align-items-center   pt-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Hac adipiscing id</p>
                            </div>
                            <div className=' d-flex align-items-center   pt-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Text Annotation</p>
                            </div>
                            <div className=' d-flex align-items-center   pt-3 pb-5'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Tellus ut</p>
                            </div>
                        </div>
                    </div>
                </div>
               
                    <div className='latest_box latest_shadow  p-4 mx-lg-2 mx-xl-0  text-center'>
                        <p className=' ff_Medium mb-0 fs_md text-white opacity_7'>Rapid</p>
                        <p className='mb-0 ff_Medium fs_2xl text-white'><span className='font-monospace'>$</span>90</p>
                    <p className=' ff_Medium fs_md text-white mx_280_md opacity_7  mt-2 mb-4'>Vitae sollicitudin arcu pretium nec cras.</p>
                        <Green_btn_2 Green_btn_2text="Buy now" />

                        <p className=' ff_Bold fs_sm text-white mt-4 opacity_7'>Buy Later</p>
                        <hr className='normal_line mt-4' />
                        <div className='d-flex justify-content-center'>
                            <div>
                                <div className=' d-flex align-items-center   pt-3'>
                                    <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                    <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Video Annotation</p>
                                </div>
                                <div className=' d-flex align-items-center   pt-3'>
                                    <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                    <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>image Annotation</p>
                                </div>
                                <div className=' d-flex align-items-center   pt-3'>
                                    <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                    <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Text Annotation</p>
                                </div>
                                <div className=' d-flex align-items-center   pt-3'>
                                    <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                    <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Praesent</p>
                                </div>
                                <div className=' d-flex align-items-center   pt-3'>
                                    <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                    <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Elit urna</p>
                                </div>
                                <div className=' d-flex align-items-center   pt-3'>
                                    <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                    <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Massa nec in in</p>
                                </div>
                                <div className=' d-flex align-items-center   pt-3'>
                                    <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                    <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Lorem feugiat</p>
                                </div>
                                <div className=' d-flex align-items-center   pt-3'>
                                    <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                    <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>At scelerisque</p>
                                </div>
                                <div className=' d-flex align-items-center   pt-3'>
                                    <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                    <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Justo est</p>
                                </div>
                                <div className=' d-flex align-items-center   pt-3 pb-5'>
                                    <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                    <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Egestas</p>
                                </div>
                            </div>
                        </div>
                    </div>
               

                {/* 3 */}
                <div className=' latest_shadow latest_box text-center  p-4 mx-lg-2 mx-xl-0 '>
                    <p className=' ff_Medium mb-0 fs_md text-white opacity_7'>Enterprise</p>
                    <p className='mb-0 ff_Medium fs_2xl text-white'><span className='font-monospace'>$</span>150</p>
                    <p className=' ff_Medium fs_md text-white mx_280_md opacity_7  mt-2 mb-4'>Interdum rhoncus nisl et rutrum tortor lectus.</p>
                    <Green_btn_2 Green_btn_2text="Buy now" />

                    <p className=' ff_Bold fs_sm text-white mt-4 opacity_7'>Buy Later</p>
                    <hr className='normal_line mt-4' />
                    <div className=' d-flex justify-content-center'>
                        <div>
                            <div className=' d-flex align-items-center   pt-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Video Annotation</p>
                            </div>
                            <div className=' d-flex align-items-center   pt-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Vitae odio orci ut</p>
                            </div>
                            <div className=' d-flex align-items-center   pt-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Ullamcorper vel</p>
                            </div>
                            <div className=' d-flex align-items-center   pt-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Quam cursus at</p>
                            </div>
                            <div className=' d-flex align-items-center   pt-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Nunc nibh cursus</p>
                            </div>
                            <div className=' d-flex align-items-center   pt-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Massa nec in in</p>
                            </div>
                            <div className=' d-flex align-items-center   pt-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Pellentesque</p>
                            </div>
                            <div className=' d-flex align-items-center   pt-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Adipiscing</p>
                            </div>
                            <div className=' d-flex align-items-center   pt-3'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>image Annotation</p>
                            </div>
                            <div className=' d-flex align-items-center   pt-3 pb-5'>
                                <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Text Annotation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>

        </Container >
    )
}
