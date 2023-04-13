import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Green_btn from './Green_btn';
import green_lght from '../assets/img/png/green_light.png';
import blue_lght from '../assets/img/png/blue_light.png';

const Best_data = () => {
    return (
        <section className=' position-relative'>
            <Container>
                <img className=' position-absolute green_lght' src={green_lght} alt="" />
                <div className=' text-center'>
                    <h1 className=' ff_Bold fs_4xl fw_500'>Best Data Platform for <span className=' sky'> Manufacturing AI</span></h1>
                    <p className=' ff_Book fs_sm'>Achieve a new level of data accuracy. Automate your video and
                        image classification with unprecedented speed and efficiency. </p>
                    <Green_btn any_text='Explore' />
                </div>
                <img className=' position-absolute blue_lght' src={blue_lght} alt="" />

            </Container>
        </section>
    )
}

export default Best_data