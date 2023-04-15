import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Green_btn from './Green_btn';
export const Turpis = () => {
    return (
        <section className='py-3'>
            <Container>
                <div className='turpis_img text-center py-5 my-5'>
                    <h3 className=' ff_Medium fs_3xl fw_400 white mt-4'>Turpis id consectetur</h3>
                    <p className=' ff_Book fs_sm fw_300 white feauth_wdth mx-auto pt-3 p-1 p-xl-0'>Feugiat tempor sagittis vitae amet dis nisl est. Neque tristique tellus
                        etiam nascetur at adipiscing. Tellus morbi faucibus at aliquam venenatis. Suspendis
                        se vitae sed os maecenas. Malesuada in tortor cras dapibus.</p>
                    <div className=' mt-5 mb-3'>
                        <Green_btn any_text='Sign up for free' />
                    </div>
                </div>
            </Container>
        </section>
    )
}







