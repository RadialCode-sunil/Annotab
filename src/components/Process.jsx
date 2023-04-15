import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import threedisplay from '../assets/img/png/threedisplay.png';
import greenboll from '../assets/img/png/green_light.png';
import Green_btn from './Green_btn';
import firstdisplay from '../assets/img/png/firstdisplay.png'
import seconddisplay from '../assets/img/png/seconddisplay.png'
import threddisplay from '../assets/img/png/threddisplay.png'

const Process = () => {
    return (
        <div className='darkblue position-relative pt-5 pb-0 pb-xl-5 '>
            <img className=' position-absolute Team_green_light' src={greenboll} alt="greenboll" />
            <Container className='pb-5 pt-5'>
                <Row className=' align-items-center flex-column-reverse flex-xl-row'>
                    <Col xs={12} xl={6} className='pt-5 pt-xl-0'>
                        <img className=' img-fluid d-sm-none pb-4' src={threedisplay} alt="threedisplay" />
                        <div className=' position-relative w-100 '>
                            <div className=' seconddisplay_img1 '>
                                <img className='position-relative z_index_2  d-none d-sm-block' src={firstdisplay} alt="firstdisplay" />
                            </div>
                            <div className='seconddisplay_img2'>
                                <img className='position-relative z_index_2  d-none d-sm-block' src={seconddisplay} alt="seconddisplay" />

                            </div>
                            <div className='seconddisplay_img3'>
                                <img className='position-relative z_index_2  d-none d-sm-block' src={seconddisplay} alt="seconddisplay" />
                            </div>
                        </div>
                        <div className='desktop_img'></div>
                    </Col>
                    <Col xs={12} xl={6}>
                        <p className=' white fs_3xl fw_400 min_w_524 ff_Medium'>Process of Annotation
                            video</p>
                        <p className=' white fs_sm fw_400 min_w_524 pb-4 ff_Book'>Scelerisque integer egestas nunc egestas. Vestibulum nunc blandit ultrices sit sagittis rutrum sed felis in ullamcorper adipiscing.</p>
                        <Green_btn any_text="Interested" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Process