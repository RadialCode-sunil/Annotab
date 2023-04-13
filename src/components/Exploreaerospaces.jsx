import React from 'react'
import { Container } from 'react-bootstrap'


const Exploreaerospaces = (props) => {
    return (

        <Container>
            <p id={props.max } className=' ff_Medium fs_3xl grey fw_500  '>{props.Aerospace} </p>
            <p className='  ff_Book grey fs_sm fw_300 max_width_704'>Scelerisque integer egestas nunc egestas. Vestibulum nunc blandit ultrices sit sagittis rutrum sed felis in ullamcorper adipiscing.</p>
            <div className='pt-5'>
                <div className=' d_grid py-5  mb-5 '>
                    <div className='agri_1 command_box position-relative'>
                        <img className=' w-100' src={props.gridimg1} alt="" />
                    </div>
                    <div className='agri_2 command_box position-relative'>
                        <img className=' w-100' src={props.gridimg2} alt="" />

                    </div>
                    <div className='agri_3 command_box position-relative'>
                        <img className=' w-100' src={props.gridimg3} alt="" />

                    </div>
                    <div className='agri_4 command_box position-relative'>
                        <img className=' w-100' src={props.gridimg4} alt="" />

                    </div>
                    <div className='agri_5 command_box position-relative'>
                        <img className=' w-100' src={props.gridimg5} alt="" />

                    </div>
                    <div className='agri_6 command_box position-relative'>
                        <img className=' w-100' src={props.gridimg6} alt="" />

                    </div>

                </div>
                <div className='d-flex justify-content-center  align-items-center flex-column'>
                    <a href="#" class=" ff_Bold fs_md fw_400 butnnew butn d-inline-block mb-5">Explore</a>
                </div>            </div>
        </Container>
    )
}

export default Exploreaerospaces