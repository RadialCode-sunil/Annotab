import React from 'react'
import star_light from '../assets/img/png/star_light.png'
import aerospace1 from '../assets/img/png/aerospace1.png'
import aerospaces2 from '../assets/img/png/aerospace2.png'
import aerospace3 from '../assets/img/png/aerospace3.png'
import { Container, Row, Col } from 'react-bootstrap';
const Aerospaces2 = () => {
    return (
        <Container className='py-5'>
            <div className='d-flex align-items-center justify-content-center '>
                <p className='ff_Medium fs_3xl grey'>Lorem Epsum Dolar Sit emit</p>
            </div>
            <Row className='mt-5'>
                <Col lg={4} sm={6} xs={12}>
                    <ul>
                        <li className='ff_Book fs_sm grey opacity_7 dot max_w_273'>Malesuada velit risus dolor sit turpis dolor tempus. Senectus.</li>
                        <li className='ff_Book fs_sm grey opacity_7 dot mt-2'>Integer pharetra elementum nisl eu. Id ullamcorper lobortis rhoncus tellus.</li>
                    </ul>
                    <ul className='mt-5'>
                        <li className='ff_Book fs_sm grey opacity_7 dot max_w_284'>Placerat sed euismod quisque sed non amet. Quisque dui pharetra.</li>
                        <li className='ff_Book fs_sm grey opacity_7 dot max_w_300 mt-2'>Vulputate non in est arcu porta tincidunt malesuada lacus. Pharetra a.</li>
                    </ul>

                </Col>
                <Col lg={4} sm={6} xs={12} className='d-flex align-items-center justify-content-center'>
                    <div className=' overflow-hidden'>
                        <img className='w-100 footer_img img_hover' src={star_light} alt="star_light" />
                    </div>
                </Col>
                <Col lg={4} sm={6} xs={12} className=' mt-4 mt-lg-0'>
                    <ul>
                        <li className='ff_Book fs_sm grey opacity_7 dot max_w_260'>Proin nunc iaculis pretium placerat tempor. Mauris arcu et.</li>
                        <li className='ff_Book fs_sm grey opacity_7 dot mt-2'>At nam eget ornare purus nisl</li>
                    </ul>
                    <ul className='mt-5'>
                        <li className='ff_Book fs_sm grey opacity_7 dot max_w_273'>Dis bibendum fermentum tempus tristique morbi quis lacinia est sit.</li>
                        <li className='ff_Book fs_sm grey opacity_7 dot max_w_300 mt-2'>Pellentesque viverra sed vitae donec. Morbi scelerisque cras quis eu.</li>
                    </ul>
                </Col>
                <Col lg={4} sm={6} xs={12} className='d-flex align-items-center justify-content-center mt-4'>
                    <div className=' overflow-hidden'>
                        <img className='w-100 footer_img img_hover' src={aerospace1} alt="aerospace1" />
                    </div>
                </Col>
                <Col lg={4} sm={6} xs={12} className='d-flex align-items-center justify-content-center mt-4'>
                    <div className=' overflow-hidden'>
                        <img className='w-100 footer_img img_hover' src={aerospaces2} alt="aerospace2" />
                    </div>
                </Col>
                <Col lg={4} sm={6} xs={12} className='d-flex align-items-center justify-content-center mt-4'>
                    <div className=' overflow-hidden'>
                        <img className='w-100 footer_img img_hover' src={aerospace3} alt="aerospace1" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Aerospaces2