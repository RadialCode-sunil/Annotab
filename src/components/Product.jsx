import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import person from '../assets/img/png/persons.png';
import bluelihgt from '../assets/img/png/blue_light.png';
import Accordion from 'react-bootstrap/Accordion';
import AccordionAnno from './AccordionAnno';



const Product = () => {
    return (
        <section className=' py-3 py-lg-5'>
            <Container className=' position-relative'>

                <div className=' text-center justify-content-center d-flex align-items-center flex-column'>
                    <p className=' ff_Medium  fs_3xl grey fw_400'>Product</p>
                    <p className=' ff_Book  fs_sm grey fw_400 max_width_459'>Ultricies in integer semper pharetra. vestibulum.Ultricies in integer semper pharetra. vestibulum.</p>
                </div>
                <Row className='mt-lg-5 pt-3 pt-lg-5'>
                    <Col xs={12} lg={6}>
                        <div>
                            <img className=' position-absolute blue_img' src={bluelihgt} alt="" />
                            <AccordionAnno />

                        </div>
                    </Col>
                    <Col xs={12} lg={6} className='text-end'>
                        <img className='img-fluid w_100  h-100 mt-3 mt-lg-0' src={person} alt="" />

                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Product