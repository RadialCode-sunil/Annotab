import React from "react";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Green_btn from "./Green_btn";

const SolutionsHero = (props) => {
  return (
    <div>
      <header className="bg_black_blue d-flex min-vh-100 flex-column Overflow_x_hidden ">
        <NavBar />
        <section className="d-flex flex-column flex-grow-1 justify-content-center position-relative z-0">
          <Container>
            <div className="d-flex flex-column align-items-center justify-content-center pt-5">
              <h2
                className="text-center fs_4xl ff_Bold white pb-3"
                id={props.hero_h2_w}
              >
                Best Data Platform for
                <span className=" sky ff_Bold"> {props.firstheading} </span>
                <span className=" sky ff_arial fw-bold">{props.middleHalf} </span>
                <span className=" sky ff_Bold"> {props.thirdHalf} </span>
              </h2>
              <p className="fs_sm grey ff_Book opacity_70 pb-4 mb-3 text-center max_w_612">
                Achieve a new level of data accuracy. Automate your video and
                image classification with unprecedented speed and efficiency.
              </p>
              <div className="pb-5">
                <Link to="/annotab">
                  <Green_btn any_text="Explore" />
                </Link>
              </div>
            </div>
          </Container>
          <div className="blue_light solution_bluelight_position"></div>
          <div className="green_light solution_greenlight_position"></div>
        </section>
      </header>
    </div>
  );
};

export default SolutionsHero;
