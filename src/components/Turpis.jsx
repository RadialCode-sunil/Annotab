import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
export const Turpis = () => {
    return (
        <section className='py-5'>
            <Container>
                <div className='turpis_img text-center py-5 my-5'>
                    <h3 className=' ff_Medium fs_3xl fw_400 white'>Turpis id consectetur</h3>
                    <p className=' ff_Book fs_sm fw_300 white feauth_wdth mx-auto pt-2'>Feugiat tempor sagittis vitae amet dis nisl est. Neque tristique tellus
                        etiam nascetur at adipiscing. Tellus morbi faucibus at aliquam venenatis. Suspendis
                        se vitae sed os maecenas. Malesuada in tortor cras dapibus.</p>
                    <a className='sign_up_btn ff_Bold fs_md black fw_400 d-inline-block mt-2' href="#">Sign up for free</a>
                </div>
            </Container>
        </section>
    )
}
