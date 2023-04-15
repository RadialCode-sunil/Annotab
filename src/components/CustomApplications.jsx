import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import design from '../assets/img/png/designimage.png'
import Green_btn from './Green_btn';
export const CustomApplication = () => {
    return (
        <Container className='py-lg-5'>
            <Row className='py-5'>
                <Col xs={12} xl={6} className=' d-flex flex-column pb-5 pb-xl-0 justify-content-center align-items-center align-items-xl-start text-center text-xl-start'>
                    <p className='mb-0 ff_Medium grey fs_3xl lh_140p mx_480_xl'>Custom Applications
                        Annotation</p>
                    <p className='ff_book pt-3 opacity_7 ff_sm grey mx_470_xl'>Scelerisque integer egestas nunc egestas. Vestibulum nunc blandit ultrices sit sagittis rutrum sed felis in ullamcorper adipiscing.</p>
                    <div className='pt-3'>
                        <Green_btn any_text='Know More'/>
                    </div>                    
                </Col>
                <Col xs={12} xl={6} className='d-flex justify-content-center'><img className='w-100' src={design} alt="" /></Col>
            </Row>
        </Container>
    )
}
