import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import classess from '../assets/img/png/classtype.png'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Green_btn from './Green_btn';
import plus from '../assets/img/png/plus.png'
export const Classes = () => {
    return (
        <Container className='py-3 py-lg-5 '>
            <Row className='py-3 py-lg-5'>
                <Col xs={12} xl={6} className=' d-flex flex-column pb-5 pb-xl-0 justify-content-center align-items-center align-items-xl-start text-center text-xl-start'>
                    <p className='mb-0 ff_Medium grey fs_3xl lh_140p mx_300_xl'>All classes of
                        annotab</p>
                    <p className='ff_book pt-3 ff_sm grey mx_470_xl'>Scelerisque integer egestas nunc egestas. Vestibulum nunc blandit ultrices sit sagittis rutrum sed felis in ullamcorper adipiscing.</p>
                    <div className='pt-3'>
                        <Green_btn any_text='Learn More' />
                    </div>
                </Col>
                <Col xs={12} xl={6} className=' position-relative'>
                    <div className='class_box p-4'>
                        <p className=' mb-0 ff_Medium fs_ss grey opacity_7'>Class Type</p>
                        <div className=' pe-5 pb-5'>
                            <div className=' d-flex flex-column flex-sm-row justify-content-between pb-3'>
                                <div>
                                    <div className=' d-flex justify-content-center   flex-column'>
                                        <div className=' d-flex align-items-center Polygon ps-3 py-2 pe-5'>
                                            <span className=' d-flex align-items-center'><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.105469 1.6141L1.51547 0.204102L7.51547 6.2041L1.51547 12.2041L0.105469 10.7941L4.68547 6.2041L0.105469 1.6141ZM6.10547 1.6141L7.51547 0.204102L13.5155 6.2041L7.51547 12.2041L6.10547 10.7941L10.6855 6.2041L6.10547 1.6141Z" fill="#D1D1D1" />
                                            </svg></span>
                                            <p className='ps-2 mb-0 fs_sm ff_Medium grey clr_change opacity_7 pe-5'>Polygon</p>
                                        </div>
                                    </div>
                                    <div className=' d-flex justify-content-center flex-column Polygon ps-3 py-2 pe-5'>
                                        <div className=' d-flex align-items-center'>
                                            <span className=' d-flex align-items-center'><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.105469 1.6141L1.51547 0.204102L7.51547 6.2041L1.51547 12.2041L0.105469 10.7941L4.68547 6.2041L0.105469 1.6141ZM6.10547 1.6141L7.51547 0.204102L13.5155 6.2041L7.51547 12.2041L6.10547 10.7941L10.6855 6.2041L6.10547 1.6141Z" fill="#D1D1D1" />
                                            </svg></span>
                                            <p className='ps-2 mb-0 fs_sm ff_Medium grey opacity_7 clr_change'>Tag</p>
                                        </div>
                                    </div>
                                    <div className=' d-flex justify-content-center flex-column Polygon ps-3 py-2 pe-5'>
                                        <div className=' d-flex align-items-center'>
                                            <span className=' d-flex align-items-center'><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.105469 1.6141L1.51547 0.204102L7.51547 6.2041L1.51547 12.2041L0.105469 10.7941L4.68547 6.2041L0.105469 1.6141ZM6.10547 1.6141L7.51547 0.204102L13.5155 6.2041L7.51547 12.2041L6.10547 10.7941L10.6855 6.2041L6.10547 1.6141Z" fill="#D1D1D1" />
                                            </svg></span>
                                            <p className='ps-2 mb-0 fs_sm ff_Medium grey clr_change opacity_7'>Line</p>
                                        </div>
                                    </div>
                                    <div className=' d-flex justify-content-center flex-column Polygon ps-3 py-2 pe-5'>
                                        <div className=' d-flex align-items-center'>
                                            <span className=' d-flex align-items-center'><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.105469 1.6141L1.51547 0.204102L7.51547 6.2041L1.51547 12.2041L0.105469 10.7941L4.68547 6.2041L0.105469 1.6141ZM6.10547 1.6141L7.51547 0.204102L13.5155 6.2041L7.51547 12.2041L6.10547 10.7941L10.6855 6.2041L6.10547 1.6141Z" fill="#D1D1D1" />
                                            </svg></span>
                                            <p className='ps-2 mb-0 fs_sm ff_Medium grey clr_change opacity_7'>Ellipse</p>
                                        </div>
                                    </div>
                                    <div className=' d-flex justify-content-center flex-column Polygon ps-3 py-2 pe-5'>
                                        <div className=' d-flex align-items-center'>
                                            <span className=' d-flex align-items-center'><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.105469 1.6141L1.51547 0.204102L7.51547 6.2041L1.51547 12.2041L0.105469 10.7941L4.68547 6.2041L0.105469 1.6141ZM6.10547 1.6141L7.51547 0.204102L13.5155 6.2041L7.51547 12.2041L6.10547 10.7941L10.6855 6.2041L6.10547 1.6141Z" fill="#D1D1D1" />
                                            </svg></span>
                                            <p className='ps-2 mb-0 fs_sm clr_change ff_Medium grey opacity_7'>Link</p>
                                        </div>
                                    </div>
                                </div>
                                {/* side */}
                                <div>
                                    <div className=' d-flex justify-content-center flex-column'>
                                        <div className=' d-flex align-items-center Polygon ps-3 py-2 pe-5'>
                                            <span className=' d-flex align-items-center'><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.105469 1.6141L1.51547 0.204102L7.51547 6.2041L1.51547 12.2041L0.105469 10.7941L4.68547 6.2041L0.105469 1.6141ZM6.10547 1.6141L7.51547 0.204102L13.5155 6.2041L7.51547 12.2041L6.10547 10.7941L10.6855 6.2041L6.10547 1.6141Z" fill="#D1D1D1" />
                                            </svg></span>
                                            <p className='ps-2 mb-0 clr_change fs_sm ff_Medium grey opacity_7'>Bounding Box</p>
                                        </div>
                                    </div>
                                    <div className=' d-flex justify-content-center flex-column Polygon ps-3 py-2 pe-5'>
                                        <div className=' d-flex align-items-center'>
                                            <span className=' d-flex align-items-center'><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.105469 1.6141L1.51547 0.204102L7.51547 6.2041L1.51547 12.2041L0.105469 10.7941L4.68547 6.2041L0.105469 1.6141ZM6.10547 1.6141L7.51547 0.204102L13.5155 6.2041L7.51547 12.2041L6.10547 10.7941L10.6855 6.2041L6.10547 1.6141Z" fill="#D1D1D1" />
                                            </svg></span>
                                            <p className='ps-2 mb-0 fs_sm ff_Medium grey opacity_7 clr_change'>Skeleton</p>
                                        </div>
                                    </div>
                                    <div className=' d-flex justify-content-center flex-column Polygon ps-3 py-2 pe-5'>
                                        <div className=' d-flex align-items-center'>
                                            <span className=' d-flex align-items-center'><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.105469 1.6141L1.51547 0.204102L7.51547 6.2041L1.51547 12.2041L0.105469 10.7941L4.68547 6.2041L0.105469 1.6141ZM6.10547 1.6141L7.51547 0.204102L13.5155 6.2041L7.51547 12.2041L6.10547 10.7941L10.6855 6.2041L6.10547 1.6141Z" fill="#D1D1D1" />
                                            </svg></span>
                                            <p className='ps-2 mb-0 fs_sm ff_Medium grey opacity_7 clr_change'>Keypoint</p>
                                        </div>
                                    </div>
                                    <div className=' d-flex justify-content-center flex-column Polygon ps-3 py-2 pe-5'>
                                        <div className=' d-flex align-items-center'>
                                            <span className=' d-flex align-items-center'><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.105469 1.6141L1.51547 0.204102L7.51547 6.2041L1.51547 12.2041L0.105469 10.7941L4.68547 6.2041L0.105469 1.6141ZM6.10547 1.6141L7.51547 0.204102L13.5155 6.2041L7.51547 12.2041L6.10547 10.7941L10.6855 6.2041L6.10547 1.6141Z" fill="#D1D1D1" />
                                            </svg></span>
                                            <p className='ps-2 mb-0 fs_sm ff_Medium clr_change grey opacity_7'>Cuboid</p>
                                        </div>
                                    </div>
                                    <div className=' d-flex justify-content-center flex-column Polygon ps-3 py-2 pe-5'>
                                        <div className=' d-flex align-items-center'>
                                            <span className=' d-flex align-items-center'><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.105469 1.6141L1.51547 0.204102L7.51547 6.2041L1.51547 12.2041L0.105469 10.7941L4.68547 6.2041L0.105469 1.6141ZM6.10547 1.6141L7.51547 0.204102L13.5155 6.2041L7.51547 12.2041L6.10547 10.7941L10.6855 6.2041L6.10547 1.6141Z" fill="#D1D1D1" />
                                            </svg></span>
                                            <p className='ps-2 mb-0 fs_sm ff_Medium grey opacity_7 clr_change'>Key value Pair</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='class_box class_box_color class_width p-3 position_absolute_sm_n class_position'>
                        <div className=' d-flex align-items-center flex-column flex-sm-row justify-content-center'>
                            <div className=' pe-sm-4'>
                                <img src={plus} />
                                <p className=' ff_Medium grey fs_sm pt-2'>Polygon</p>
                            </div>
                            <div className='border_left_1'>
                                <p className=' fs_sm ff_Medium grey opacity_7 mb-0 ps-3 text-center text-sm-start'>Congue non diam ut massa sagittis blandit enim a. Neque augue tincidunt duis egestas feugiat sed in felis interdum. Ligula ac suspendisse egestas risus faucibus suscipit eleifend. Amet sit urna libero cras tellus. Neque aliquet tortor tortor ac. Sapien lacus.</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className='Classes_div_w'></div>
        </Container>
    )
}
