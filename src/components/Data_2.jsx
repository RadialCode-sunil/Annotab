import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Best_data from './Best_data';
import NavBar from './NavBar';
const Data_2 = () => {
    return (
        <section className=' min-vh-100 d-flex flex-column'>
            <NavBar />
            <section className=' flex-grow-1 d-flex align-items-center'>
                <Container>

                    <Best_data any_text='Best Data Platform for Agriculture AI' />

                </Container>
            </section>
        </section>
    )
}

export default Data_2