import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';  

const Tortor = () => {
    return (
        <div className='bg_tortor vh-100 align-items-center d-flex justify-content-center flex-column text-center'>
            <Container>
                <div className='d-flex justify-content-center align-items-center flex-column pt-5 mt-5'>
                    <p className='max_width_876 ff_Medium  fs_3xl fw_400 white pt-4 '>Tortor nisi amet aliquam fermentum. Elementum orci sit mi nunc ac. Aliquam eget cras felis id feugiat.</p>
                    <p className=' fs_sm white ff_Book fw_300'>Eget molestie purus molestie urna feugiat eget.</p>
                    <a href="#" className='know_more_btn  fs_md black fw_700 ff_Bold mt-3 me-4'>Know More</a>
                </div>
            </Container>
        </div>
    )
}

export default Tortor