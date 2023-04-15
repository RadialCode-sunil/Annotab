
import React from 'react'
import Slider from "react-slick";
import { Container, Row, Col } from 'react-bootstrap';
import Green_btn_2 from './Green_btn_2';
const Challenges = (props) => {
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
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }

            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }]
    };

    return (
        <Container>
            <div className='pt-5' >
                <p id={props.max} className=' ff_Medium fs_3xl text-white fw_500 min_w_704'>{props.heading} <span className='ff_arial'>{props.secondhalf}</span> <span>{props.thirdHalf}</span></p>
                <p className='grey fs_sm fw_300 grey whitelight_clr pb-5 min_w_704'>{props.para}</p>

                <div >
                    <Slider {...Team_slider}>
                        <div className='p-3'>
                            <div className=' h-100  d-flex justify-content-between flex-column'>
                                <div className='zomeimg'>
                                    <div className='overflow-hidden'>
                                        <img className=' w-100 explore_img_hover' src={props.sliderimg} alt="sliderimg1" />
                                    </div>
                                    <p className=' ff_Medium fs_lg text-white fw_400 pt-3'>{props.smallheading1} </p>
                                    <ul className='pb-3'>
                                        <li className='list_style whitelight_clr ff_Book fw_300 fs_sm min_w_324 '>{props.smallline1 }</li>
                                        <li className='list_style whitelight_clr ff_Book fw_300 fs_sm min_w_324 pt-2 '>{props.smallline2 }</li>
                                        <li className='list_style whitelight_clr ff_Book fw_300 fs_sm min_w_324 pt-2'>{props.smallline3 }</li>
                                    </ul>
                                </div>
                                <Green_btn_2 Green_btn_2text="Learn More" />
                            </div>

                        </div>

                        <div className=' p-3 '>
                            <div className=' h-100 d-flex justify-content-between flex-column'>
                                <div className='zomeimg'>
                                    <div className='overflow-hidden'>
                                        <img className=' w-100  explore_img_hover' src={props.sliderimg2} alt="sliderimg2" /></div>
                                    <p className=' ff_Medium fs_lg text-white pt-3'>{props.smallheading2} </p>
                                    <ul className='pb-3'>
                                        <li className='list_style whitelight_clr ff_Book fs_sm min_w_324'>{props.smallline4 }</li>
                                        <li className='list_style whitelight_clr ff_Book fs_sm min_w_324 pt-2'>{props.smallline5}</li>
                                        <li className='list_style whitelight_clr ff_Book fs_sm min_w_324 pt-2'>{props.smallline6}</li>

                                    </ul>
                                </div>

                                <Green_btn_2 Green_btn_2text="Learn More" />
                            </div>
                        </div>

                        <div className=' p-3 '>
                            <div className=' h-100  d-flex justify-content-between flex-column'>
                                <div className='zomeimg'>
                                    <div className='overflow-hidden'>
                                        <img className=' w-100  explore_img_hover' src={props.sliderimg3} alt="sliderimg3" /></div>
                                    <p className=' ff_Medium fs_lg text-white pt-3'>{props.smallheading3}</p>
                                    <ul className='pb-3'>
                                        <li className='list_style whitelight_clr ff_Book fs_sm min_w_324'>{props.smallline7}</li>
                                        <li className='list_style whitelight_clr ff_Book fs_sm min_w_324 pt-2'>{props.smallline8}</li>
                                        <li className='list_style whitelight_clr ff_Book fs_sm min_w_324 pt-2'>{props.smallline9}</li>

                                    </ul>
                                </div>
                                <Green_btn_2 Green_btn_2text="Learn More" />
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </Container>
    )
}

export default Challenges