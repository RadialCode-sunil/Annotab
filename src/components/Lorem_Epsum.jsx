import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Manufacturing_Lorem_img1 from '../assets/img/png/Manufacturing_Lorem_img1.png';
import Manufacturing_Lorem_img2 from '../assets/img/png/Manufacturing_Lorem_img2.png';
import Manufacturing_Lorem_img3 from '../assets/img/png/Manufacturing_Lorem_img3.png';
const Lorem_Epsum = () => {
    return (
        <section className=' py-5'>
            <Container>
                <h2 className=' ff_Medium fw_600 fs_3xl white text-center'>
                    Lorem Epsum Dolar Sit emit
                </h2>

                <div className=' d-flex pt-5'>
                    <img className='' src={Manufacturing_Lorem_img1} alt="image" />
                    <div className=' ps-4'>
                        <p className=' ff_Book fw_300 fs_sm white Lorem_Epsum_p_w341 Lorem_Epsum_Amet position-relative'>
                            .  Amet at ultricies adipiscing lectus sed vitae. Nullam quam facilisi.
                        </p>
                        <p className=' ff_Book fw_300 fs_sm white Lorem_Epsum_p_w341'>
                            .  Maecenas sed cras feugiat ligula auctor gravida. Nunc nisi massa scelerisque est.
                        </p>
                    </div>
                </div>
                <div className=' d-flex align-items-end pt-5'>

                    <div className=' d-flex '>
                        <img src={Manufacturing_Lorem_img2} alt="image" />
                        <div className=' ps-4'>
                            <p className=' ff_Book fw_300 fs_sm white Lorem_Epsum_p_w284'>
                                .  Volutpat ipsum nunc non e molestie  swssa volutpat mauris.
                            </p>
                            <p className=' ff_Book fw_300 fs_sm white Lorem_Epsum_p_w284 pe-5'>
                                .  Volutpat ipsum nunc non e molestie  swssa.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src={Manufacturing_Lorem_img3} alt="image" />
                    </div>
                </div>


            </Container>
        </section>
    )
}

export default Lorem_Epsum  