import React from 'react'
import sit from '../assets/img/png/sit.png'
import mauris from '../assets/img/png/mauris.png'
import urna from '../assets/img/png/urna.png'
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";

const Testimonials = () => {
    var Test_slider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
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
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }]
    };
    return (
        <Container className='py-4'>
            <div className='d-flex align-items-center flex-column text-center'>
                <p className='ff_Medium fs_3xl grey'>Testimonials</p>
                <p className='ff_Medium fs_sm grey opacity_7 max_w'>Libero mus sagittis pretium felis in. Mi cursus mi nullam urna donec placerat quis vitae. Quis pellentesque massa integer arcu cras. Purus dictum in gravida arcu orci enim fringilla.</p>
            </div>
            <Slider {...Test_slider} className=' pt-4 mt-3'>
                {/* 1 */}
                <div className='d-flex flex-column align-items-center justify-content-between text-center p-5 h-100 '>

                    <div>
                        <img className='d-inline w-50' src={sit} alt="" />
                        <p className='ff_Medium fs_lg white pt-4'> Sit donec</p>
                        <p className='ff_Medium fs_sm grey opacity_7'>Quis quam risus id nulla egestas pellentesque. Id in maecenas aenean ornare aenean ultricies ridiculus aliquam.</p>
                    </div>

                    <a className='ff_Bold fs_md sky Learn_btn d-inline-block mt-4' href="#">Learn More</a>
                </div>
                {/* 2 */}
                <div className='d-flex flex-column align-items-center justify-content-between text-center p-5 h-100 '>
                    <div>
                        <img className='d-inline w-50' src={mauris} alt="" />
                        <p className='ff_Medium fs_lg white pt-4'>Mauris</p>
                        <p className='ff_Medium fs_sm grey opacity_7'>Quisque eu adipiscing risus tempor arcu vitae  fames. Pulvinar id congue euismod viverra. Sed platea dolor.</p>
                    </div>
                    <a className='ff_Bold fs_md sky Learn_btn d-inline-block mt-4' href="#">Learn More</a>
                </div>
                {/* 3 */}
                <div className='d-flex flex-column align-items-center justify-content-between text-center p-5 justify-content-between h-100 '>
                    <div>
                        <img className='d-inline w-50' src={urna} alt="" />
                        <p className='ff_Medium fs_lg white pt-4'>Urna</p>
                        <p className='ff_Medium fs_sm grey opacity_7'>Sit risus rhoncus non non tortor amet iaculis morbi.  Et tempus elit nibh rhoncus in. Aliquam.</p>
                    </div>
                    <a className='ff_Bold fs_md sky Learn_btn d-inline-block mt-4' href="#">Learn More</a>
                </div>

            </Slider>

        </Container>
    )
}

export default Testimonials