import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Resources = () => {
    return (
        <section>
            <Container className=''>
                <div className=' d-flex flex-column flex-lg-row align-items-lg-center'>
                    <div>
                        <h2 className=' ff_Medium fw_400 fs_3xl white'>
                            Resources
                        </h2>
                        <p className=' ff_Book fw_400 fs_sm white w-75 '>
                            Magna scelerisque amet adipiscing diam ac justo. Elementum mattis aenean malesuada mauris eget platea id. Ullamcorper.
                        </p>
                    </div>
                    <div className=' d-flex align-items-center'>
                        <div className='Resources_Blogs px-3'>
                            <p className='ff_Medium fw_400 fs_xl white'>
                                Blogs
                            </p></div>
                        <div className='Resources_Documentation'>
                            <p className='ff_Medium fw_400 fs_xl white ps-5 ms-4 '>
                                Documentation
                            </p>
                        </div></div>
                </div>
            </Container>
        </section>
    )
}

export default Resources