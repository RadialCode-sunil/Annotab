import React from 'react'
import tamato from '../assets/img/png/tamato.png'
import tractor from '../assets/img/png/tractor.png'
import tractor_2 from '../assets/img/png/tractor_2.png'
import tractor_3 from '../assets/img/png/tractor_3.png'
import { Container, Row, Col } from 'react-bootstrap';
const Agricultures2 = () => {
    return (
        <Container className='py-5'>
            <div className='d-flex align-items-center justify-content-center '>
                <p className='ff_Medium fs_3xl grey'>Lorem Epsum Dolar Sit emit</p>
            </div>
            <Row className='mt-5'>
                <Col lg={4} sm={6} xs={12}>
                    <ul>
                        <li className='ff_Book fs_sm grey opacity_7 dot max_w_284'>Porttitor viverra eu fames diam aenean elementum. Tempus at.</li>
                        <li className='ff_Book fs_sm grey opacity_7 dot max_w_284 mt-2'>In turpis vel sit a. Tristique adipiscing commodo et.</li>
                    </ul>
                    <ul className='mt-5'>
                        <li className='ff_Book fs_sm grey opacity_7 dot max_w_273'>Neque egestas proin odio ridiculus eget mi pulvinar in eget integer in.</li>
                        <li className='ff_Book fs_sm grey opacity_7 dot mt-2'>Donec elementum vel quisque a faucibus dui aliquam consequat risus. Felis fusce.</li>
                    </ul>

                </Col>
                <Col lg={4} sm={6} xs={12} className='d-flex align-items-center justify-content-center '>
                    <div className=' overflow-hidden'>
                        <img className='w-100 footer_img img_hover' src={tamato} alt="tamato" /></div>
                </Col>
                <Col lg={4} sm={6} xs={12} className=' mt-4 mt-lg-0'>
                    <ul>
                        <li className='ff_Book fs_sm grey opacity_7 dot max_w_260'>Egestas nibh sed urna turpis facilisis mus. Non id ac.</li>
                        <li className='ff_Book fs_sm grey opacity_7 dot mt-2'>Imperdiet nunc pellentesque sed</li>
                    </ul>
                    <ul className='mt-5'>
                        <li className='ff_Book fs_sm grey opacity_7 dot'>Felis enim magna neque condimentum parturient nec. Neque.</li>
                        <li className='ff_Book fs_sm grey opacity_7 dot mt-2'>Elementum nec bibendum orci auctor egestas dolor neque lacus senectus.</li>
                    </ul>
                </Col>
                <Col lg={4} sm={6} xs={12} className='d-flex align-items-center justify-content-center mt-5 pt-3'>
                    <div className=' overflow-hidden'>
                        <img className='w-100 footer_img img_hover' src={tractor} alt="tractor" />
                    </div>
                </Col>
                <Col lg={4} sm={6} xs={12} className='d-flex align-items-center justify-content-center mt-5 pt-3'>
                    <div className=' overflow-hidden'>
                        <img className='w-100 footer_img img_hover' src={tractor_2} alt="tractor_2" />
                    </div>
                </Col>
                <Col lg={4} sm={6} xs={12} className='d-flex align-items-center justify-content-center mt-5 pt-3'>
                    <div className=' overflow-hidden'>
                        <img className='w-100 footer_img img_hover  ' src={tractor_3} alt="tractor_3" /></div>

                </Col>
            </Row>
        </Container>
    )
}

export default Agricultures2