import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Manufacturing_Lorem_img1 from '../assets/img/png/Manufacturing_Lorem_img1.png';
import Manufacturing_Lorem_img2 from '../assets/img/png/Manufacturing_Lorem_img2.png';
import Manufacturing_Lorem_img3 from '../assets/img/png/Manufacturing_Lorem_img3.png';
const Lorem_Epsum = () => {
    return (
        <section className=' py-5 position-relative'>
            <div className='Lorem_Automotive_light_black'></div>
            <Container>
                <h2 className=' ff_Medium fw_600 fs_3xl white text-center position-relative z_index_2'>
                    Lorem Epsum Dolar Sit emit
                </h2>

                <div className=' d-flex flex-column flex-lg-row pt-5'>
                    <img className=' img-fluid position-relative z_index_2' src={Manufacturing_Lorem_img1} alt="image" />
                    <div className=''>
                        <ul>
                            <li className=' ff_Book fw_300 fs_sm white opacity_7 Lorem_Epsum_p_w341 Lorem_Epsum_Amet position-relative pt-3 pt-lg-0 list_dot'>
                                Amet at ultricies adipiscing lectus sed vitae. Nullam quam facilisi.
                            </li>

                            <li className=' ff_Book fw_300 fs_sm white opacity_7 Lorem_Epsum_p_w341 Lorem_Epsum_Maecenas position-relative list_dot pt-2 '>
                                Maecenas sed cras feugiat ligula auctor gravida. Nunc nisi massa scelerisque est.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=' d-flex flex-column flex-xl-row align-items-xl-end pt-5 mt-5 mt-lg-0'>

                    <div className=' d-flex flex-column flex-lg-row pt-3 pt-lg-0'>
                        <img className=' img-fluid' src={Manufacturing_Lorem_img2} alt="image" />
                        <div className=''>
                            <ul className=''>
                                <li className=' ff_Book fw_300 fs_sm white opacity_7 pt-3 pt-lg-0 list_dot Lorem_Epsum_p_w284'>
                                    Volutpat ipsum nunc non e molestie  swssa volutpat mauris.
                                </li>
                                <li className=' ff_Book fw_300 fs_sm white opacity_7 pe-5 list_dot pt-2 Lorem_Epsum_p_w284'>
                                    Volutpat ipsum nunc non e molestie  swssa.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=' pt-5'>
                        <span className='Lorem_Epsum_Data_img position-relative d-flex-xs  justify-content-center justify-content-sm-start'>

                            <img className=' img-fluid Manufacturing_img_3_w' src={Manufacturing_Lorem_img3} alt="image" />

                        </span>
                    </div>
                </div>


            </Container>
        </section >
    )
}

export default Lorem_Epsum  