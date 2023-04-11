import React from "react";
import NavBar from "./NavBar";
import pcImg1 from "../assets/img/png/pc_img1.png";
import pcImg2 from "../assets/img/png/pc_img2.png";
import pcImg3 from "../assets/img/png/pc_img3.png";
// import dottedbackground from '../assets/img/png/dotted-background.png'
import { Container } from "react-bootstrap";
import GreenButton from "./GreenButton";

const Hero = () => {
  return (
    <div>
      <header className="bg_black_blue d-flex min-vh-100 flex-column dotted_bg ">
        <NavBar />
        <section className="d-flex flex-column flex-grow-1 justify-content-center position-relative z-2">
          <Container>
            <div className="d-flex flex-column align-items-center">
              <h2 className="text-center fs_4xl ff_all_round white pb-3">
                One place to build deploy{" "}
                <span className="d-block text-center sky">AI models</span>
              </h2>
              <p className="fs_sm grey ff_Book opacity_70 pb-4 mb-3">
                Join our beta program for your Annotation solutions
              </p>
              <div className="pb-5">
                <GreenButton />
              </div>
              <div className="d-flex w-100 justify-content-center pt-3 curly_line_bg gap_87">
                <div>
                  <img src={pcImg1} alt="img" />
                </div>
                <div>
                  <img src={pcImg2} alt="img" />
                </div>
                <div>
                  <img src={pcImg3} alt="img" />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </header>
    </div>
  );
};

export default Hero;
