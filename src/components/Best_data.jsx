import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Green_btn from './Green_btn';

const Best_data = (props) => {
    return (
        <section className=' position-relative py-5 overflow-hidden'>
            <div className=' position-absolute blue_lght'></div>
            <div className=' position-absolute green_lght'></div>
            <Container>
                <div className=' text-center'>
                    <h1 id={props.txt_id} className=' ff_Bold fs_4xl fw_500 white best_wdth mx-auto'> <span className=' sky'> {props.any_text}</span></h1>
                    <p className=' ff_Book fs_sm achieve_wdth mx-auto grey opacity_7 '>Achieve a new level of data accuracy. Automate your video and
                        image classification with unprecedented speed and efficiency. </p>
                    <div className=' pt-4'><Green_btn any_text='Explore' /></div>
                </div>
            </Container>
        </section>
    )
}

export default Best_data