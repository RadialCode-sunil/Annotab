import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Green_btn from './Green_btn';
import tortor_1 from '../assets/img/png/tortor_1.png';
import tortor_2 from '../assets/img/png/tortor_2.png';
import tortor_3 from '../assets/img/png/tortor_3.png';
import tortor_4 from '../assets/img/png/tortor_4.png';
import tortor_5 from '../assets/img/png/tortor_5.png';
import tortor_6 from '../assets/img/png/tortor_6.png';
import tortor_7 from '../assets/img/png/tortor_7.png';
import tortor_8 from '../assets/img/png/tortor_8.png';
import tortor_9 from '../assets/img/png/tortor_9.png';
import tortor_10 from '../assets/img/png/tortor_10.png';
import tortor_11 from '../assets/img/png/tortor_11.png';
import tortor_12 from '../assets/img/png/tortor_12.png';
import tortor_13 from '../assets/img/png/tortor_13.png';



const Tortor = () => {
    return (
        <div className=' position-relative'>

            <div className='z_index_1 max_width_876  d-inline-block position-absolute top-50 start_50  translate_middle  transform_y__50  text-center'>

                <Container>
                    <div>
                        <p className=' ff_Medium  fs_3xl fw_400 white  '>Tortor nisi amet aliquam fermentum. Elementum orci sit mi nunc ac. Aliquam eget cras felis id feugiat.</p>
                        <p className=' fs_sm white ff_Book fw_300 pt-2'>Eget molestie purus molestie urna feugiat eget.</p>
                        <div className=' mt-5 me-3'>
                            <Green_btn any_text='Know More' />
                        </div>
                    </div>
                </Container>

            </div>
            <marquee direction="right" height="100%" className=' w-100  d-flex'>
                <img className=' img-fluid' src={tortor_1} alt="" />
                <img className=' img-fluid' src={tortor_2} alt="" />
                <img className=' img-fluid' src={tortor_3} alt="" />
                <img className=' img-fluid' src={tortor_3} alt="" />
                <img className=' img-fluid' src={tortor_3} alt="" />
                <img className=' img-fluid' src={tortor_3} alt="" />
                <img className=' img-fluid' src={tortor_3} alt="" />
                <img className=' img-fluid' src={tortor_3} alt="" />
                <img className=' img-fluid' src={tortor_3} alt="" />
            </marquee>
            <marquee direction="left" height="100%" className=' w-100 d-flex tortor_1'>
                <img className=' img-fluid' src={tortor_4} alt="" />
                <img className=' img-fluid' src={tortor_5} alt="" />
                <img className=' img-fluid' src={tortor_6} alt="" />
                <img className=' img-fluid' src={tortor_6} alt="" />
                <img className=' img-fluid' src={tortor_6} alt="" />
                <img className=' img-fluid' src={tortor_6} alt="" />
                <img className=' img-fluid' src={tortor_6} alt="" />
                <img className=' img-fluid' src={tortor_6} alt="" />
                <img className=' img-fluid' src={tortor_6} alt="" />
            </marquee>
            <marquee direction="right" height="100%" className='  d-flex top_84 start-0 '>
                <img className=' img-fluid' src={tortor_7} alt="" />
                <img className=' img-fluid' src={tortor_8} alt="" />
                <img className=' img-fluid' src={tortor_9} alt="" />
                <img className=' img-fluid' src={tortor_10} alt="" />
                <img className=' img-fluid' src={tortor_10} alt="" />
                <img className=' img-fluid' src={tortor_10} alt="" />
                <img className=' img-fluid' src={tortor_10} alt="" />
                <img className=' img-fluid' src={tortor_10} alt="" />
                <img className=' img-fluid' src={tortor_10} alt="" />
            </marquee>
            <marquee direction="left" height="100%" className='  d-flex top_126 end-0 '>
                <img className=' img-fluid' src={tortor_11} alt="" />
                <img className=' img-fluid' src={tortor_12} alt="" />
                <img className=' img-fluid' src={tortor_13} alt="" />
                <img className=' img-fluid' src={tortor_13} alt="" />
                <img className=' img-fluid' src={tortor_13} alt="" />
                <img className=' img-fluid' src={tortor_13} alt="" />
                <img className=' img-fluid' src={tortor_13} alt="" />
                <img className=' img-fluid' src={tortor_13} alt="" />
                <img className=' img-fluid' src={tortor_13} alt="" />
            </marquee>

        </div>
    )
}

export default Tortor