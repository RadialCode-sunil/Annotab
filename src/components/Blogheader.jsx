import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';



const Blogheader = () => {
  return (
    <div className='position-relative'>
        <NavBar/>
        <Container>
            <div className='green_light1'></div>
            <div className='d-flex flex-column align-items-center justify-content-center h_454'>
                <p className='ff_Bold fs_4xl white'>Blogs</p>
                <p className='ff_Bold fs_sm grey opacity_7 maxw_627'>Arcu nunc ut tristique massa proin bibendum et. At maecenas elementum vitae dictum pulvinar vitae. Pellentesque sem ipsum at facilisis lobortis justo. Feugiat.</p>
            </div>
            <div className='blue_light1'></div>
        </Container>
    </div>
    
  )
}

export default Blogheader