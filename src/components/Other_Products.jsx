import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container, Row, Col } from 'react-bootstrap';
import right_click from '../assets/img/png/Other_Products_right_click_img.png';
import Other_products_big_img from '../assets/img/png/Other_products_big_img.png'

const Other_Products = () => {
    return (

        <section className='py-5 position-relative'>
            <div className=' Other_purple_light1'></div>
            <div className=' Other_purple_light2'></div>
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
                                <div className=' d-flex align-items-start'>
                                    <img className=' pt-2' src={right_click} alt="image" />
                                    <p className=' ff_Book fw_300 fs_sm white mb-0 ps-3 Other_Products_p_w'>
                                        Velit aliquam tortor semper at nibh urna. Etiam pellentesque duis fames nam Ac lectus at amet augue. Ultrices aenean cras in iaculis.
                                    </p>
                                </div>
                                <div className=' d-flex align-items-start pt-4'>
                                    <img className=' pt-2' src={right_click} alt="image" />
                                    <p className=' ff_Book fw_300 fs_sm white mb-0 ps-3 Other_Products_p_w'>
                                        Velit aliquam tortor semper at nibh urna. Etiam pellentesque duis fames nam Ac lectus at amet augue. Ultrices aenean cras in iaculis.
                                    </p>
                                </div>
                                <div className=' d-flex align-items-start pt-4'>
                                    <img className=' pt-2' src={right_click} alt="image" />
                                    <p className=' ff_Book fw_300 fs_sm white mb-0 ps-3 Other_Products_p_w'>
                                        Velit aliquam tortor semper at nibh urna. Etiam pellentesque duis fames nam Ac lectus at amet augue. Ultrices aenean cras in iaculis.
                                    </p>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className='position-relative'>
                                    <div className='Other_purple_light_green'></div>
                                    <img className=' w-100 pt-5 pt-lg-0' src={Other_products_big_img} alt="image" />
                                </div>

                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="profile" title="Video Annotation">
                        <Row className=' align-items-center pt-5'>
                            <Col xs={12} md={6}>
                                <div className=' d-flex align-items-start'>
                                    <img className=' pt-2' src={right_click} alt="image" />
                                    <p className=' ff_Book fw_300 fs_sm white mb-0 ps-3 Other_Products_p_w'>
                                        Velit aliquam tortor semper at nibh urna. Etiam pellentesque duis fames nam Ac lectus at amet augue. Ultrices aenean cras in iaculis.
                                    </p>
                                </div>
                                <div className=' d-flex align-items-start pt-4'>
                                    <img className=' pt-2' src={right_click} alt="image" />
                                    <p className=' ff_Book fw_300 fs_sm white mb-0 ps-3 Other_Products_p_w'>
                                        Velit aliquam tortor semper at nibh urna. Etiam pellentesque duis fames nam Ac lectus at amet augue. Ultrices aenean cras in iaculis.
                                    </p>
                                </div>
                                <div className=' d-flex align-items-start pt-4'>
                                    <img className=' pt-2' src={right_click} alt="image" />
                                    <p className=' ff_Book fw_300 fs_sm white mb-0 ps-3 Other_Products_p_w'>
                                        Velit aliquam tortor semper at nibh urna. Etiam pellentesque duis fames nam Ac lectus at amet augue. Ultrices aenean cras in iaculis.
                                    </p>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className='position-relative'>
                                    <div className='Other_purple_light_green'></div>
                                    <img className=' w-100 pt-5 pt-lg-0' src={Other_products_big_img} alt="image" />
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="contact" title="Images Annotation" >
                        <Row className=' align-items-center pt-5'>
                            <Col xs={12} md={6}>
                                <div className=' d-flex align-items-start'>
                                    <img className=' pt-2' src={right_click} alt="image" />
                                    <p className=' ff_Book fw_300 fs_sm white mb-0 ps-3 Other_Products_p_w'>
                                        Velit aliquam tortor semper at nibh urna. Etiam pellentesque duis fames nam Ac lectus at amet augue. Ultrices aenean cras in iaculis.
                                    </p>
                                </div>
                                <div className=' d-flex align-items-start pt-4'>
                                    <img className=' pt-2' src={right_click} alt="image" />
                                    <p className=' ff_Book fw_300 fs_sm white mb-0 ps-3 Other_Products_p_w'>
                                        Velit aliquam tortor semper at nibh urna. Etiam pellentesque duis fames nam Ac lectus at amet augue. Ultrices aenean cras in iaculis.
                                    </p>
                                </div>
                                <div className=' d-flex align-items-start pt-4'>
                                    <img className=' pt-2' src={right_click} alt="image" />
                                    <p className=' ff_Book fw_300 fs_sm white mb-0 ps-3 Other_Products_p_w'>
                                        Velit aliquam tortor semper at nibh urna. Etiam pellentesque duis fames nam Ac lectus at amet augue. Ultrices aenean cras in iaculis.
                                    </p>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className='position-relative'>
                                    <div className='Other_purple_light_green'></div>
                                    <img className=' w-100 pt-5 pt-lg-0' src={Other_products_big_img} alt="image" />
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="Annoations" title="Annoations" >
                        <Row className=' align-items-center pt-5'>
                            <Col xs={12} md={6}>
                                <div className=' d-flex align-items-start'>
                                    <img className=' pt-2' src={right_click} alt="image" />
                                    <p className=' ff_Book fw_300 fs_sm white mb-0 ps-3 Other_Products_p_w'>
                                        Velit aliquam tortor semper at nibh urna. Etiam pellentesque duis fames nam Ac lectus at amet augue. Ultrices aenean cras in iaculis.
                                    </p>
                                </div>
                                <div className=' d-flex align-items-start pt-4'>
                                    <img className=' pt-2' src={right_click} alt="image" />
                                    <p className=' ff_Book fw_300 fs_sm white mb-0 ps-3 Other_Products_p_w'>
                                        Velit aliquam tortor semper at nibh urna. Etiam pellentesque duis fames nam Ac lectus at amet augue. Ultrices aenean cras in iaculis.
                                    </p>
                                </div>
                                <div className=' d-flex align-items-start pt-4'>
                                    <img className=' pt-2' src={right_click} alt="image" />
                                    <p className=' ff_Book fw_300 fs_sm white mb-0 ps-3 Other_Products_p_w'>
                                        Velit aliquam tortor semper at nibh urna. Etiam pellentesque duis fames nam Ac lectus at amet augue. Ultrices aenean cras in iaculis.
                                    </p>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className='position-relative'>
                                    <div className='Other_purple_light_green'></div>
                                    <img className=' w-100 pt-5 pt-lg-0' src={Other_products_big_img} alt="image" />
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </Container>
        </section>

    )
}

export default Other_Products