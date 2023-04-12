import React from 'react'
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";
const AnnotabHero = () => {
  return (
    <div>
      {" "}
      <header className="bg_black_blue d-flex min-vh-100 flex-column">
        <NavBar />
        <section className="d-flex flex-column flex-grow-1 justify-content-center position-relative z-0">
          <Container>
           
          </Container>
         
        </section>
      </header>
    </div>
  );
}

export default AnnotabHero