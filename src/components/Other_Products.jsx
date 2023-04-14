import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container, Row, Col } from 'react-bootstrap';
import right_click from '../assets/img/png/Other_Products_right_click_img.png';
import Other_products_big_img from '../assets/img/png/Other_products_big_img.png'

const Other_Products = () => {
    return (

        <section className='py-5'>
            <Container className='scroll-w'>
                <h2 className=' ff_Medium fs_3xl fw_500 white text-center'>Other Products</h2>
                <p className=' ff_Book fs_sm fw_300 grey Other_Products_p_Neque mx-auto text-center pt-3 pb-4'>
                    Neque eget quis ornare id a. Neque nisl purus gravida enim donec purus egestas. Non nulla purus blandit aliquam. Enim id cras fermentum sed metus.
                </p>
                <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                    className=''
                    
                >
                    <Tab eventKey="home" title="Annotab Studio">
                        <Row className=' align-items-center pt-5'>
                            <Col xs={12} md={6}>
                                <div className=' d-flex align-items-center'>
                                    <img src={right_click} alt="image" />
                                    <p className=' ff_Book fw_300 fs_sm white mb-0 ps-3 Other_Products_p_w'>
                                        Velit aliquam tortor semper at nibh urna. Etiam pellentesque duis fames nam Ac lectus at amet augue. Ultrices aenean cras in iaculis.
                                    </p>
                                </div>
                                <div className=' d-flex align-items-center pt-4'>
                                    <img src={right_click} alt="image" />
                                    <p className=' ff_Book fw_300 fs_sm white mb-0 ps-3 Other_Products_p_w'>
                                        Velit aliquam tortor semper at nibh urna. Etiam pellentesque duis fames nam Ac lectus at amet augue. Ultrices aenean cras in iaculis.
                                    </p>
                                </div>
                                <div className=' d-flex align-items-center pt-4'>
                                    <img src={right_click} alt="image" />
                                    <p className=' ff_Book fw_300 fs_sm white mb-0 ps-3 Other_Products_p_w'>
                                        Velit aliquam tortor semper at nibh urna. Etiam pellentesque duis fames nam Ac lectus at amet augue. Ultrices aenean cras in iaculis.
                                    </p>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <img className=' w-100 pt-5 pt-lg-0' src={Other_products_big_img} alt="image" />
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="profile" title="Video Annotation">
                        <h1>hello-wprd</h1>
                    </Tab>
                    <Tab eventKey="contact" title="Images Annotation" >
                        <h1>hello-wprd</h1>
                    </Tab>
                    <Tab eventKey="Annoations" title="Annoations" >
                        <h1 className=''>hello-wprd</h1>
                    </Tab>
                </Tabs>
            </Container>
        </section>

    )
}

export default Other_Products