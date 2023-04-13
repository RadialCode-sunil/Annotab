import React from "react";
import NavBar from "./NavBar";
import { Col, Container, Row } from "react-bootstrap";
import Green_btn from "./Green_btn";
import { Link } from "react-router-dom";
import annotabGif from "../assets/img/png/annotab_gif.gif"
import annotabBgDots from "../assets/img/png/annotab_bg_dots.png"
const AnnotabHero = () => {
  return (
    <div>
      {" "}
      <header className="bg_black_blue d-flex min-vh-100 flex-column position-relative">
        <NavBar />
        <section className="d-flex flex-column flex-grow-1 justify-content-center position-relative z-0">
          <Container className="position-relative">
            <Row>
              <Col lg={6} md={8} className="position-relative index_1">
                <h2 className="fs_4xl ff_Bold white pb-3">
                  Welcome to Annotab <span className="sky">Studio</span>
                </h2>
                <p className="fs_sm grey ff_Book opacity_70 pb-4 mb-3">
                  Placerat enim mi dolor cursus lorem adipiscing semper. Vel
                  fermentum auctor molestie magna tellus. Maecenas est morbi.
                </p>
                <Link to="/annotab">
                  <Green_btn any_text="Explore" />
                </Link>
              </Col>
            </Row>
            <img className=" gif_img " src={annotabGif} alt="gif" />
          </Container>
        </section>
        <img
          className="position-absolute top-0 start-0"
          src={annotabBgDots}
          alt="bg_dots"
        />
      </header>
    </div>
  );
};

export default AnnotabHero;
