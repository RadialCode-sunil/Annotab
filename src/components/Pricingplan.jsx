import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';

const Pricingplan = () => {
  return (
    <div>
      <div className='bg_black_light'>
          <NavBar/>
        <Container>
            <div className='d-flex flex-column align-items-center justify-content-center h_454'>
                <p className='ff_Bold fs_4xl white'>Pricing Plan</p>
                <p className='ff_Bold fs_sm grey opacity_7 maxw_689 text-center'>Aliquam in cursus non massa adipiscing. Massa at vulputate pellentesque fringilla in. Est consequat eu sapien et facilisi in. Ac non nibh malesuada sed.</p>
            </div>
        </Container>
      </div>
        <div className='linear_gradient'>
          <Container>
            <div className='pt-5 text-center justify-content-center d-flex align-items-center flex-column'>
              <p className=' ff_Medium  fs_3xl grey fw_400 pt-5'>Latest Plans </p>
              <p className=' ff_Book  fs_sm grey fw_400 mx_700_md pb-5 opacity_7'>Scelerisque integer egestas nunc egestas. Vestibulum nunc blandit ultrices sit sagittis rutrum sed felis in ullamcorper adipiscing.</p>
            </div>
          </Container>
        </div>
    </div>
  )
}

export default Pricingplan