import React from 'react'
import { Container } from 'react-bootstrap'
import agri from '../assets/img/png/agri_1.png';
import agri2 from '../assets/img/png/agri_2.png';
import agri3 from '../assets/img/png/agri_3.png';
import agri4 from '../assets/img/png/agri_4.png';
import agri5 from '../assets/img/png/agri_5.png';
import agri6 from '../assets/img/png/agri_6.png';

const Exploreagriculture = (props) => {
    return (
        <section className=' pt-3 pt-lg-5 '>
            <Container>
                <div>
                    <p className=' ff_Medium fs_3xl grey fw_500 '>{props.exploremy}</p>
                    <p className='  ff_Book grey fs_sm fw_300 max_width_704 opacity_0_7'> {props.Scelerisque}.</p>
                </div>
                <div className='pt-lg-5'>
                    <div className=' d_grid py-3 py-lg-5 mt-lg-5 mb-3 mb-lg-5 '>
                        <div className='agri_1 command_box position-relative'>
                            <img className=' w-100' src={agri} alt="" />
                            <div className=' explore_sec position-absolute top-50  start-50'>
                                <p className=' ff_Medium fs_lg text-white fw_400'>Commodo</p>
                                <ul className='ps-0' >
                                    <ul className='list_style_circle'>
                                        <li className=' grey ff_Book  fs_sm fw_300 max_width_291  list_style whitelight_clr'>Rutrum velit erat nulla dolor amet tellus</li>

                                    </ul>
                                    <ul>
                                        <li className='grey ff_Book  fs_sm fw_300 max_width_291 list_style whitelight_clr'>Viverra lacus imperdiet sed ut est. Neque venenati.</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                        <div className='agri_2 command_box position-relative'>
                            <img className=' w-100' src={agri2} alt="" />
                            <div className=' explore_sec position-absolute top-50  start-50'>
                                <p className=' ff_Medium fs_lg text-white fw_400'>Commodo</p>
                                <ul className='ps-0' >
                                    <ul className='list_style_circle'>
                                        <li className=' grey ff_Book  fs_sm fw_300 max_width_291  list_style whitelight_clr'>Rutrum velit erat nulla dolor amet tellus</li>

                                    </ul>
                                    <ul>
                                        <li className='grey ff_Book  fs_sm fw_300 max_width_291 list_style whitelight_clr'>Viverra lacus imperdiet sed ut est. Neque venenati.</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                        <div className='agri_3 command_box position-relative'>
                            <img className=' w-100' src={agri3} alt="" />
                            <div className=' explore_sec position-absolute top-50  start-50'>
                                <p className=' ff_Medium fs_lg text-white fw_400'>Commodo</p>
                                <ul className='ps-0' >
                                    <ul className='list_style_circle'>
                                        <li className=' grey ff_Book  fs_sm fw_300 max_width_291  list_style whitelight_clr'>Rutrum velit erat nulla dolor amet tellus</li>

                                    </ul>
                                    <ul>
                                        <li className='grey ff_Book  fs_sm fw_300 max_width_291 list_style whitelight_clr'>Viverra lacus imperdiet sed ut est. Neque venenati.</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                        <div className='agri_4 command_box position-relative'>
                            <img className=' w-100' src={agri4} alt="" />
                            <div className=' explore_sec position-absolute top-50  start-50'>
                                <p className=' ff_Medium fs_lg text-white fw_400'>Commodo</p>
                                <ul className='ps-0' >
                                    <ul className='list_style_circle'>
                                        <li className=' grey ff_Book  fs_sm fw_300 max_width_291  list_style whitelight_clr'>Rutrum velit erat nulla dolor amet tellus</li>

                                    </ul>
                                    <ul>
                                        <li className='grey ff_Book  fs_sm fw_300 max_width_291 list_style whitelight_clr'>Viverra lacus imperdiet sed ut est. Neque venenati.</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                        <div className='agri_5 command_box position-relative'>
                            <img className=' w-100' src={agri5} alt="" />
                            <div className=' explore_sec position-absolute top-50  start-50'>
                                <p className=' ff_Medium fs_lg text-white fw_400'>Commodo</p>
                                <ul className='ps-0' >
                                    <ul className='list_style_circle'>
                                        <li className=' grey ff_Book  fs_sm fw_300 max_width_291  list_style whitelight_clr'>Rutrum velit erat nulla dolor amet tellus</li>

                                    </ul>
                                    <ul>
                                        <li className='grey ff_Book  fs_sm fw_300 max_width_291 list_style whitelight_clr'>Viverra lacus imperdiet sed ut est. Neque venenati.</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                        <div className='agri_6 command_box position-relative'>
                            <img className=' w-100' src={agri6} alt="" />
                            <div className=' explore_sec position-absolute top-50  start-50'>
                                <p className=' ff_Medium fs_lg text-white fw_400'>Commodo</p>
                                <ul className='ps-0' >
                                    <ul className='list_style_circle'>
                                        <li className=' grey ff_Book  fs_sm fw_300 max_width_291  list_style whitelight_clr'>Rutrum velit erat nulla dolor amet tellus</li>

                                    </ul>
                                    <ul>
                                        <li className='grey ff_Book  fs_sm fw_300 max_width_291 list_style whitelight_clr' >Viverra lacus imperdiet sed ut est. Neque venenati.</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className='d-flex justify-content-center  align-items-center flex-column'>
                        <a href="#" class=" ff_Bold fs_md fw_400 butnnew butn d-inline-block mb-5">Explore</a>
                    </div>            </div>
            </Container>
        </section>
    )
}

export default Exploreagriculture