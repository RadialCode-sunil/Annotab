import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import bar from '../assets/img/png/bar_img.png'

const AiAnnotation = () => {
    return (
        <div className='bg_dots py-5'>
            <Container className='py-3'>
                <div className=' text-center justify-content-center d-flex align-items-center flex-column'>
                    <p className=' ff_Medium  fs_3xl grey fw_400'>Ai Annotation</p>
                    <p className=' ff_Book  fs_sm grey fw_400 max_width_459'>Ultricies in integer semper pharetra. vestibulum.Ultricies in integer semper pharetra. vestibulum.</p>
                </div>
                <div className=' d-flex justify-content-center py-5'><img className='w-100-md-m w-md-75' src={bar} alt="" /></div>
            </Container>
        </div>
    )
}

export default AiAnnotation