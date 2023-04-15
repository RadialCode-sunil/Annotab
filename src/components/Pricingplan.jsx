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
                <p className='ff_Bold fs_4xl grey'>Pricing Plan</p>
                <p className='ff_Book fs_sm grey opacity_7 maxw_689 text-center'>Aliquam in cursus non massa adipiscing. Massa at vulputate pellentesque fringilla in. Est consequat eu sapien et facilisi in. Ac non nibh malesuada sed.</p>
            </div>
        </Container>
      </div>
    </div>
  )
}

export default Pricingplan