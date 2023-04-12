import React from 'react'
import Slider from "react-slick";
import { Container, Row, Col } from 'react-bootstrap';
import bigcrowed from '../assets/img/png/bigcrowed.png'
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
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    };

    return (
        <Container>
            <div >
                <p className=' ff_Medium fs_2xl text-white fw_500'>{props.heading}</p>
                <p className='grey fs_sm fw_300 grey'>{props.para}</p>

                <div >
                    <Slider className='h-100' {...Team_slider}>
                        <div className='d-flex justify-content-between flex-column p-3 h-auto'>
                            <div className=' h-100 bg-danger'>
                                <div>
                                    <img className=' w-100' src={bigcrowed} alt="" />
                                    <p className=' ff_Medium fs_lg text-white pt-3'>Sit donec</p>
                                    <ul className=''>
                                        <li className='list_style grey ff_Book fs_sm min_w_324'>Volutpat ipsum nunc non e molestie  swssa volutpat mauris.</li>
                                        <li className='list_style grey ff_Book fs_sm min_w_324 pt-2'>Volutpat ipsum nunc non e molestie  swssa.</li>
                                        <li className='list_style grey ff_Book fs_sm min_w_324 pt-2'>Ut lacinia quam nascetur vestibulum dui.</li>
                                    </ul>
                                </div>
                                <a className='bg-info' href="#">Learn More</a>
                            </div>

                        </div>

                        <div className='d-flex justify-content-between flex-column p-3 h-auto'>
                            <div className=' h-100 bg-danger'>
                                <div>
                                    <img className=' w-100' src={bigcrowed} alt="" />
                                    <p className=' ff_Medium fs_lg text-white pt-3'>Commodo</p>
                                    <ul>
                                        <li className='list_style grey ff_Book fs_sm min_w_324'>Rutrum velit erat nulla dolor amet tellus</li>
                                        <li className='list_style grey ff_Book fs_sm min_w_324 pt-2'>Rutrum velit erat nulla dolor amet tellus</li>
                                        <li className='list_style grey ff_Book fs_sm min_w_324 pt-2'>Viverra lacus imperdiet sed ut est. Neque venenati.</li>

                                    </ul>
                                </div>

                                <a className='bg-info' href="#">Learn More</a>
                            </div>
                        </div>

                        <div className=' d-flex justify-content-between flex-column p-3 h-auto'>
                            <div className=' h-100 bg-danger'>
                                <div>
                                    <img className=' w-100' src={bigcrowed} alt="" />
                                    <p className=' ff_Medium fs_lg text-white pt-3'>Tellus turpis</p>
                                    <ul>
                                        <li className='list_style grey ff_Book fs_sm min_w_324 '>Risus hendrerit risus</li>
                                        <li className='list_style grey ff_Book fs_sm min_w_324 pt-2'>Risus hendrerit risus</li>
                                        <li className='list_style grey ff_Book fs_sm min_w_324 pt-2'>Laoreet vulputate amet semper lectus est sagittis ac. Ultrices enim volutpat </li>

                                    </ul>
                                </div>
                                <a className='bg-info' href="#">Learn More</a>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </Container>
    )
}

export default Challenges