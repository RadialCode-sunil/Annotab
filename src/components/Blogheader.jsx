import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';



const Blogheader = () => {
  return (
    <div>
        <div className='position-relative bg_black_light'>
          <NavBar/>
          <Container>
            <div className='green_light1 d-none d-md-block'></div>
            <div className='d-flex flex-column align-items-center justify-content-center h_454'>
                <p className='ff_Bold fs_4xl white'>Blogs</p>
                <p className='ff_Book fs_sm grey opacity_7 maxw_627'>Arcu nunc ut tristique massa proin bibendum et. At maecenas elementum vitae dictum pulvinar vitae. Pellentesque sem ipsum at facilisis lobortis justo. Feugiat.</p>
            </div>
            <div className='blue_light1 d-none d-md-block'></div>
          </Container>
        </div>
        <div className='linear_gradient pt-4'>
            <Container className='pt-5'>
              <p className='mb-0 ff_Medium grey fs_3xl'>Latest Updated blogs </p>
              <p className='ff_book pt-3 opacity_7 ff_sm grey mx_600 pb-5'>Scelerisque integer egestas nunc egestas. Vestibulum nunc blandit ultrices sit sagittis rutrum sed felis in ullamcorper adipiscing.</p>
            </Container>
        </div>
    </div>
    
  )
}

export default Blogheader