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
        <Container>
            <div>
                <p className=' ff_Medium fs_3xl grey fw_500 '>{props.exploremy}</p>
                <p className='  ff_Book grey fs_sm fw_300 max_width_704 '> {props.Scelerisque}.</p>
            </div>
            <div className='pt-5'>
                <div className=' d_grid py-5 mt-5 mb-5 '>
                    <div className='agri_1 command_box position-relative'>
                        <img className=' w-100' src={agri} alt="" />
                        <div className=' explore_sec position-absolute top-50  start-50'>
                            <p className=' ff_Medium fs_lg text-white fw_400'>Commodo</p>
                            <ul className='ps-0' >
                                <li className='list_style_circle'>
                                    <p className=' grey ff_Book  fs_sm fw_300 max_width_291 '>Rutrum velit erat nulla dolor amet tellus</p>

                                </li>
                                <li>
                                    <p className='grey ff_Book  fs_sm fw_300 max_width_291'>Viverra lacus imperdiet sed ut est. Neque venenati.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='agri_2 command_box position-relative'>
                        <img className=' w-100' src={agri2} alt="" />
                        <div className=' explore_sec position-absolute top-50  start-50'>
                            <p className=' ff_Medium fs_lg text-white fw_400'>Commodo</p>
                            <p className=' grey ff_Book  fs_sm fw_300 max_width_291'>Rutrum velit erat nulla dolor amet tellus</p>
                            <p className='grey ff_Book  fs_sm fw_300 max_width_291'>Viverra lacus imperdiet sed ut est. Neque venenati.</p>
                        </div>
                    </div>
                    <div className='agri_3 command_box position-relative'>
                        <img className=' w-100' src={agri3} alt="" />
                        <div className=' explore_sec position-absolute top-50  start-50'>
                            <p className=' ff_Medium fs_lg text-white fw_400'>Commodo</p>
                            <p className=' grey ff_Book  fs_sm fw_300 max_width_291'>Rutrum velit erat nulla dolor amet tellus</p>
                            <p className='grey ff_Book  fs_sm fw_300 max_width_291'>Viverra lacus imperdiet sed ut est. Neque venenati.</p>
                        </div>
                    </div>
                    <div className='agri_4 command_box position-relative'>
                        <img className=' w-100' src={agri4} alt="" />
                        <div className=' explore_sec position-absolute top-50  start-50'>
                            <p className=' ff_Medium fs_lg text-white fw_400'>Commodo</p>
                            <p className=' grey ff_Book  fs_sm fw_300 max_width_291'>Rutrum velit erat nulla dolor amet tellus</p>
                            <p className='grey ff_Book  fs_sm fw_300 max_width_291'>Viverra lacus imperdiet sed ut est. Neque venenati.</p>
                        </div>
                    </div>
                    <div className='agri_5 command_box position-relative'>
                        <img className=' w-100' src={agri5} alt="" />
                        <div className=' explore_sec position-absolute top-50  start-50'>
                            <p className=' ff_Medium fs_lg text-white fw_400'>Commodo</p>
                            <p className=' grey ff_Book  fs_sm fw_300 max_width_291'>Rutrum velit erat nulla dolor amet tellus</p>
                            <p className='grey ff_Book  fs_sm fw_300 max_width_291'>Viverra lacus imperdiet sed ut est. Neque venenati.</p>
                        </div>
                    </div>
                    <div className='agri_6 command_box position-relative'>
                        <img className=' w-100' src={agri6} alt="" />
                        <div className=' explore_sec position-absolute top-50  start-50'>
                            <p className=' ff_Medium fs_lg text-white fw_400'>Commodo</p>
                            <p className=' grey ff_Book  fs_sm fw_300 max_width_291'>Rutrum velit erat nulla dolor amet tellus</p>
                            <p className='grey ff_Book  fs_sm fw_300 max_width_291'>Viverra lacus imperdiet sed ut est. Neque venenati.</p>
                        </div>
                    </div>

                </div>
                <div className='d-flex justify-content-center  align-items-center flex-column'>
                    <a href="#" class=" ff_Bold fs_md fw_400 butnnew butn d-inline-block mb-5">Explore</a>
                </div>            </div>
        </Container>
    )
}

export default Exploreagriculture