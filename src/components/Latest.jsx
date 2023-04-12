import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import tick from '../assets/img/svg/tick.svg'
export const Latest = () => {
    return (
        <Container>
            <div className='pt-5 text-center justify-content-center d-flex align-items-center flex-column'>
                <p className=' ff_Medium  fs_3xl grey fw_400 pt-5'>Latest Plans </p>
                <p className=' ff_Book  fs_sm grey fw_400 mx_700_md pb-5'>Scelerisque integer egestas nunc egestas. Vestibulum nunc blandit ultrices sit sagittis rutrum sed felis in ullamcorper adipiscing.</p>
                <div className='d-flex align-items-center mb-5 border_bottom_latest'>
                    <p className=' ff_Medium  fs_xl grey fw_400 mb-0 pe-5 border_bottom_1 pointer'>Basic plans</p>
                    <p className=' ff_Medium  fs_xl grey fw_400 mb-0 ps-2 border_bottom_1 pointer'>Exclusive plans</p>
                </div>
                <Row className=' pb-5'>
                    <Col lg={4} md={6} xs={12}>
                        <div className='latest_box p-4'>
                            <p className=' ff_Medium mb-0 fs_md text-white'>Normal</p>
                            <p className='mb-0 ff_Medium fs_2xl text-white'><span>&#x24;</span>50</p>
                            <p className=' ff_Medium fs_md text-white mx_280_md mt-2'>Quis commodo viverra elementum duis.</p>
                            <a className=' intersted_btn d-inline-block ff_Bold fs_sm sky mt-3' href="#">Buy
                                now</a>
                            <p className=' ff_Bold fs_sm text-white mt-4'>Buy Later</p>
                            <hr className='normal_line' />
                            <div className=' d-flex justify-content-center'>
                                <div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Video Annotation</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>image Annotation</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Tellus ut</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Diam senectus</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>A cras</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Et orci vitae et</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Suspendisse amet</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Hac adipiscing id</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Text Annotation</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3 pb-5'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Tellus ut</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    {/*   2   */}
                    <Col lg={4} md={6} xs={12} className='pt-4 pt-md-0'>
                        <div className='latest_box p-4'>
                            <p className=' ff_Medium mb-0 fs_md text-white'>Rapid</p>
                            <p className='mb-0 ff_Medium fs_2xl text-white'>$90</p>
                            <p className=' ff_Medium fs_md text-white mx_280_md'>Vitae sollicitudin arcu pretium nec cras.</p>
                            <a className=' intersted_btn d-inline-block ff_Bold fs_sm sky mt-3' href="#">Buy
                                now</a>
                            <p className=' ff_Bold fs_sm text-white mt-4'>Buy Later</p>
                            <hr className='normal_line mt-4' />
                            <div className='d-flex justify-content-center'>
                                <div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Video Annotation</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>image Annotation</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Text Annotation</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Praesent</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Elit urna</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Massa nec in in</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Lorem feugiat</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>At scelerisque</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Justo est</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3 pb-5'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Egestas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    {/*      3    */}
                    <Col lg={4} md={6} xs={12} className='pt-4 pt-lg-0'>
                        <div className='latest_box p-4'>
                            <p className=' ff_Medium mb-0 fs_md text-white'>Enterprise</p>
                            <p className='mb-0 ff_Medium fs_2xl text-white'>$150</p>
                            <p className=' ff_Medium fs_md text-white mx_280_md'>Interdum rhoncus nisl et rutrum tortor lectus.</p>
                            <a className=' intersted_btn d-inline-block ff_Bold fs_sm sky mt-3' href="#">Buy
                                now</a>
                            <p className=' ff_Bold fs_sm text-white mt-4'>Buy Later</p>
                            <hr className='normal_line mt-4' />
                            <div className=' d-flex justify-content-center'>
                                <div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Video Annotation</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Vitae odio orci ut</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Ullamcorper vel</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Quam cursus at</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Nunc nibh cursus</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Massa nec in in</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Pellentesque</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Adipiscing</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>image Annotation</p>
                                    </div>
                                    <div className=' d-flex align-items-center   pt-3 pb-5'>
                                        <span className='d-flex align-items-center'><img src={tick} alt="" /></span>
                                        <p className='mb-0 ps-2 ff_Medium text-white  fs_sm opacity0_6'>Text Annotation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </Container>
    )
}
