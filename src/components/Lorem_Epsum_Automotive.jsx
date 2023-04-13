import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Lorem_Epsum_Automotive_img_1 from '../assets/img/png/Lorem_Epsum_Automotive_img1.png';
import Lorem_Epsum_Automotive_img_2 from '../assets/img/png/Lorem_Epsum_Automotive_img2.png';
import Lorem_Epsum_Automotive_img_3 from '../assets/img/png/Lorem_Epsum_Automotive_img3.png';
const Lorem_Epsum_Automotive = () => {
    return (
        <section className='py-5 mb-5'>
            <Container>
                <h2 className=' ff_Medium fw_600 fs_3xl white text-center'>
                    Lorem Epsum Dolar Sit emit
                </h2>

                <div className=' d-flex flex-column flex-lg-row justify-content-between pt-5'>

                    <div className=''>
                        <ul>
                            <li className=' ff_Book fw_300 fs_sm white opacity_7 Lorem_Epsum_p_w284 pe-3 position-relative list_dot Volutpat_p position-relative'>
                                Volutpat ipsum nunc non e molestie  swssa volutpat mauris.
                            </li>

                            <li className=' ff_Book fw_300 fs_sm white opacity_7 Lorem_Epsum_p_w284 pe-3  position-relative list_dot pt-3'>
                                Volutpat ipsum nunc non e molestie  swssa.
                            </li>
                        </ul>
                    </div>
                    <div className='Lorem_Epsum_Automotive_img_1  position-relative d-inline me-5 pe-4'><img className=' img-fluid ' src={Lorem_Epsum_Automotive_img_1} alt="Data engine" /></div>
                </div>

                <div className='d-flex flex-column flex-lg-row justify-content-between Lorem_Epsum_Automotive_img_2 position-relative d-inline'>
                    <img className=' img-fluid ' src={Lorem_Epsum_Automotive_img_2} alt="Data engine" />
                    <div className=' pt-5 mt-3'>
                        <ul className='Amet_ul '>
                            <li className=' ff_Book fw_300 fs_sm white opacity_7 Lorem_Epsum_p_w284 position-relative pt-3 pt-lg-0 list_dot Amet_p position-relative'>
                                Amet at ultricies adipiscing lectus sed vitae. Nullam quam facilisi.
                            </li>

                            <li className=' ff_Book fw_300 fs_sm white opacity_7 Lorem_Epsum_p_w341 position-relative list_dot pt-2 '>
                                Maecenas sed cras feugiat ligula auctor gravida. Nunc nisi massa scelerisque est.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='d-flex flex-column flex-lg-row justify-content-between align-items-end'>

                    <div className=' pt-5 '>
                        <ul className='Volutpat_ul'>
                            <li className=' ff_Book fw_300 fs_sm white opacity_7 Lorem_Epsum_p_w341 position-relative pt-3 pt-lg-0 list_dot'>
                                Volutpat ipsum nunc non e molestie  swssa volutpat mauris.
                            </li>

                            <li className=' ff_Book fw_300 fs_sm white opacity_7 position-relative list_dot pt-2 '>
                                Volutpat ipsum nunc non e molestie  swssa.
                            </li>
                            <li className=' ff_Book fw_300 fs_sm white opacity_7 position-relative list_dot pt-2 '>
                                Ut lacinia quam nascetur vestibulum dui.
                            </li>
                        </ul>
                    </div>
                    <div className='Lorem_Epsum_Automotive_img_3 position-relative d-inline me-5 pe-4'><img className=' img-fluid' src={Lorem_Epsum_Automotive_img_3} alt="Data engine" /></div>
                </div>
            </Container>
        </section>
    )
}

export default Lorem_Epsum_Automotive