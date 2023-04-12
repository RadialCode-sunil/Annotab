import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import tick from '../assets/img/svg/tick.svg'
export const Pricing = () => {
    return (
        <Container>
            <p className=' ff_Medium text-center fs_3xl grey mb-0'>Pricing</p>
            <p className=' ff_Book fs_sm grey text-center'>Ultricies in integer semper pharetra. vestibulum.Ultricies in integer <br className=' d-none d-md-block'></br> semper pharetra. vestibulum.</p>
            <Row className=' pb-5'>
                <Col lg={4} md={6} xs={12}>
                    <div className='normal_box p-3'>
                        <p className=' ff_Medium mb-0 fs_md text-white'>Normal</p>
                        <p className='mb-0 ff_Medium fs_2xl text-white'>$50</p>
                        <p className=' ff_Medium fs_md text-white'>Quis commodo viverra <br className=' d-none d-md-block' /> elementum duis.</p>
                        <hr className='normal_line' />
                        <div className=' d-flex align-items-center pt-3'>
                            <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                            <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Video Annotation</p>
                        </div>
                        <div className=' d-flex align-items-center pt-3'>
                            <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                            <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>image Annotation</p>
                        </div>
                        <div className=' d-flex align-items-center pt-3 pb-3'>
                            <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                            <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Text Annotation</p>
                        </div>
                        <hr className='normal_line' />
                        <a className=' intersted_btn d-inline-block ff_Bold fs_sm sky' href="#">Interested</a>
                    </div>
                </Col>
                {/* ///////////////////////// */}
                <Col lg={4} md={6} xs={12} className='pt-4 pt-md-0'>
                    <div className='normal_box p-3'>
                        <p className=' ff_Medium mb-0 fs_md text-white'>Normal</p>
                        <p className='mb-0 ff_Medium fs_2xl text-white'>$90</p>
                        <p className=' ff_Medium fs_md text-white'>Vitae sollicitudin arcu <br className=' d-none d-md-block' /> pretium nec cras.</p>
                        <hr className='normal_line' />
                        <div className=' d-flex align-items-center pt-3'>
                            <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                            <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Video Annotation</p>
                        </div>
                        <div className=' d-flex align-items-center pt-3'>
                            <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                            <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>image Annotation</p>
                        </div>
                        <div className=' d-flex align-items-center pt-3 pb-3'>
                            <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                            <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Text Annotation</p>
                        </div>
                        <hr className='normal_line' />
                        <a className=' intersted_btn d-inline-block ff_Bold fs_sm sky' href="#">Interested</a>
                    </div>
                </Col>
                <Col lg={4} md={6} xs={12} className='pt-4 pt-lg-0'>
                    <div className='normal_box p-3'>
                        <p className=' ff_Medium mb-0 fs_md text-white'>Normal</p>
                        <p className='mb-0 ff_Medium fs_2xl text-white'>$150</p>
                        <p className=' ff_Medium fs_md text-white'>Interdum rhoncus nisl et <br className=' d-none d-md-block' /> rutrum tortor lectus.</p>
                        <hr className='normal_line' />
                        <div className=' d-flex align-items-center pt-3'>
                            <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                            <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Video Annotation</p>
                        </div>
                        <div className=' d-flex align-items-center pt-3'>
                            <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                            <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>image Annotation</p>
                        </div>
                        <div className=' d-flex align-items-center pt-3 pb-3'>
                            <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                            <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Text Annotation</p>
                        </div>
                        <hr className='normal_line' />
                        <a className=' intersted_btn d-inline-block ff_Bold fs_sm sky' href="#">Interested</a>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}
