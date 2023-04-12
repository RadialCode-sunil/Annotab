import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import threedisplay from '../assets/img/png/threedisplay.png';
import greenboll from '../assets/img/png/green_light.png';
import Green_btn from './Green_btn';
const Process = () => {
    return (
        <div className='darkblue pt-5 position-relative pt-5 pb-5 d-none d-md-block'>
            <img className=' position-absolute Team_green_light' src={greenboll} alt="" />
            <Container>
                <Row className=' align-items-center'>
                    <Col xs={12} md={6}>
                        <img className=' img-fluid' src={threedisplay} alt="" />
                    </Col>
                    <Col xs={12} md={6}>
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