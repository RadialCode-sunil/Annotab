import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Slider from "react-slick";
import Green_btn_2 from './Green_btn_2';


const Solutions = () => {
    var Team_slider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        nextArrow: ".next",
        prevArrow: ".back",
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
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
    <div>
        <Container/>
        <Row/>
        <Col/>
        
        <section className='bg_darkblue py-5 overflow-hidden'>
            <Container>
                <div className='d-lg-flex text-center text-lg-start justify-content-between align-items-center pb-5'>
                    <div>
                        <p className='ff_Medium fs_3xl grey'>Solutions</p>
                        <p className='ff_Book fs_sm white opacity_7'>Sit diam dictumst est pellentesque nunc mattis. Ut.</p>
                    </div>
                    <div className='d-flex justify-content-center text-center align-items-center'>
                        <div className='line me-3'> </div>
                        <p className='mb-0 ff_Book fs_sm white opacity_7'>Slide for more</p>
                        <div className='line ms-3'> </div>
                    </div>
                </div>
            <div className='solutions pt-3'>
                <Slider  {...Team_slider}>
                <div className='px-2 h-100 d-flex flex-column justify-content-between'>
                    <div><p className='ff_Medium fs_lg white'>Healthcare & Medicine</p>
                    <p className='ff_Book fs_sm white opacity_7'>Tristique fames neque facilisis bibendum pretium elementum non. commodo. Cursus suspendisse vel quis ridiculus id. Volutpat vulputate mollis at sit.</p></div>
                              <Green_btn_2 Green_btn_2text='Learn More' />
                </div>
                <div className='px-2 h-100 d-flex flex-column justify-content-between'>
                    <div>
                        <p className='ff_Medium fs_lg white'>Manufacturing</p>
                        <p className='ff_Book fs_sm white opacity_7'>Felis nunc senectus integer nisi eget nunc. Convallis semper eget metus ullamcorper adipiscing proin ultrices massa convallis tortor aliquet.</p>
                    </div>                       
                    <Green_btn_2 Green_btn_2text='Learn More' />
                </div>
                <div className='px-2 h-100 d-flex flex-column justify-content-between'>
                    <div>
                        <p className='ff_Medium fs_lg white'>Agriculture</p>
                    <p className='ff_Book fs_sm white opacity_7'>Pellentesque massa eu at adipiscing quam viverra ut lectus. Bibendum dis donec a diam. Dui lacus tortor dignissim vel est vestibulum augue sagittis in egestas.</p>
                    </div>
                    <Green_btn_2 Green_btn_2text='Learn More' />
                </div>
                <div className='px-2 h-100 d-flex flex-column justify-content-between'>
                    <div>
                        <p className='ff_Medium fs_lg white'>Aerospace & Defense</p>
                    <p className='ff_Book fs_sm white opacity_7'>Pellentesque massa eu at adipiscing quam viverra ut lectus. Bibendum dis donec a diam. Dui lacus tortor dignissim vel est vestibulum augue sagittis in egestas.</p>
                    </div>
                    <Green_btn_2 Green_btn_2text='Learn More' />
                </div>
                </Slider>
            </div>
            </Container>
        </section>
    </div>
  )
}

export default Solutions