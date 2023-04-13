import React from "react";
import { Container, Nav } from "react-bootstrap";
import annotab from "../assets/img/png/logo.png";
import Green_btn from "./Green_btn";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Nav className="bg_blur position-relative z_index_5">
        <Container className="py-3">
          <div className="d-flex justify-content-lg-around justify-content-between align-items-center py-1">
            <img src={annotab} alt="annotab logo" />
            <input type="checkbox" id="check" className="d-none" />
            <label
              htmlFor="check"
              className="Menuicon d-lg-none position-relative"
            >
              <span></span>
              <span></span>
              <span className="icon_span"></span>
            </label>
            <div className="d-lg-flex d-none align-items-center gap_106  flex-row ">
              <ul className="d-flex mb-0 gap-xl-4 gap-3 p-0 flex-lg-row flex-column">
                <li>
                  <Link to="/">
                    <a className="fs_sm text-white ff_Book" href="#">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="dropdown">
                  <a
                    className="fs_sm text-white product position-relative ff_Book"
                    href="#"
                  >
                    Products{" "}
                    <span className="ps-2">
                      <svg
                        width="11"
                        height="7"
                        viewBox="0 0 11 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.5 6.49999C5.36846 6.49999 5.24087 6.47708 5.11722 6.43128C4.99357 6.38548 4.89097 6.32441 4.80942 6.24808L0.2713 2.03435C0.0904331 1.86641 0 1.65267 0 1.39313C0 1.13359 0.0904331 0.919846 0.2713 0.751907C0.452167 0.583969 0.682362 0.5 0.961883 0.5C1.2414 0.5 1.4716 0.583969 1.65247 0.751907L5.5 4.32442L9.34753 0.751907C9.5284 0.583969 9.75859 0.5 10.0381 0.5C10.3176 0.5 10.5478 0.583969 10.7287 0.751907C10.9096 0.919846 11 1.13359 11 1.39313C11 1.65267 10.9096 1.86641 10.7287 2.03435L6.19058 6.24808C6.09193 6.33968 5.98505 6.40472 5.86995 6.44319C5.75486 6.48166 5.63154 6.5006 5.5 6.49999Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </a>
                  <div className="dropdown-content">
                    <a className="fs_sm text-white ff_Book" href="#">
                      Annotab&nbsp;Studio
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Video&nbsp;Annotab{" "}
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Images&nbsp;Annotab{" "}
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Annoations{" "}
                    </a>
                  </div>
                </li>
                <li className="dropdown">
                  <a
                    className="fs_sm text-white product position-relative ff_Book"
                    href="#"
                  >
                    Solutions{" "}
                    <span className="ps-2">
                      <svg
                        width="11"
                        height="7"
                        viewBox="0 0 11 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.5 6.49999C5.36846 6.49999 5.24087 6.47708 5.11722 6.43128C4.99357 6.38548 4.89097 6.32441 4.80942 6.24808L0.2713 2.03435C0.0904331 1.86641 0 1.65267 0 1.39313C0 1.13359 0.0904331 0.919846 0.2713 0.751907C0.452167 0.583969 0.682362 0.5 0.961883 0.5C1.2414 0.5 1.4716 0.583969 1.65247 0.751907L5.5 4.32442L9.34753 0.751907C9.5284 0.583969 9.75859 0.5 10.0381 0.5C10.3176 0.5 10.5478 0.583969 10.7287 0.751907C10.9096 0.919846 11 1.13359 11 1.39313C11 1.65267 10.9096 1.86641 10.7287 2.03435L6.19058 6.24808C6.09193 6.33968 5.98505 6.40472 5.86995 6.44319C5.75486 6.48166 5.63154 6.5006 5.5 6.49999Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </a>
                  <div className="dropdown-content">
                    <a className="fs_sm text-white ff_Book" href="#">
                      Healthcare & Medicine{" "}
                    </a>
                    <Link to="/Manufacturing">
                      <a className="fs_sm text-white ff_Book" href="#">
                        Manufacturing{" "}
                      </a>
                    </Link>
                    <Link to="/Agriculture">
                      <a className="fs_sm text-white ff_Book" href="#">
                        Agriculture{" "}
                      </a>
                    </Link>
                    <Link to="/Aerospace">
                      <a className="fs_sm text-white ff_Book" href="#">
                        Aerospace & Defense{" "}
                      </a></Link>
                    <Link to="/Automotive">
                      <a className="fs_sm text-white ff_Book" href="#">
                        Automotive{" "}
                      </a>
                    </Link>

                    <Link to="/Banking">
                      <a className="fs_sm text-white ff_Book" href="#">
                        Banking & Finance{" "}
                      </a></Link>

                    <Link to="/Transportation">
                      <a className="fs_sm text-white ff_Book" href="#">
                        Transportation{" "}
                      </a>
                    </Link>

                    <Link to="/Oil">
                      <a className="fs_sm text-white ff_Book" href="#">
                        Oil & Gas{" "}
                      </a>
                    </Link>

                    <Link to="/Retail">
                      <a className="fs_sm text-white ff_Book" href="#">
                        Retail & Ecommerce{" "}
                      </a>
                    </Link>

                    <Link to="/Safety">
                      <a className="fs_sm text-white ff_Book" href="#">
                        Safety & Security{" "}
                      </a>
                    </Link>

                    <Link to="/Telecommunications">
                      <a className="fs_sm text-white ff_Book" href="#">
                        Telecommunications{" "}
                      </a>
                    </Link>

                    <Link to="/Utilities">
                      <a className="fs_sm text-white ff_Book" href="#">
                        Utilities{" "}
                      </a>
                    </Link>

                  </div>
                </li>
                <li>
                  <Link to="/Pricingnav">
                    <a className="fs_sm text-white ff_Book" href="#">
                      Pricing
                    </a>
                  </Link>
                </li>
                <li className="dropdown">
                  <a
                    className="fs_sm text-white product position-relative ff_Book"
                    href="#"
                  >
                    Resources{" "}
                    <span className="ps-2">
                      <svg
                        width="11"
                        height="7"
                        viewBox="0 0 11 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.5 6.49999C5.36846 6.49999 5.24087 6.47708 5.11722 6.43128C4.99357 6.38548 4.89097 6.32441 4.80942 6.24808L0.2713 2.03435C0.0904331 1.86641 0 1.65267 0 1.39313C0 1.13359 0.0904331 0.919846 0.2713 0.751907C0.452167 0.583969 0.682362 0.5 0.961883 0.5C1.2414 0.5 1.4716 0.583969 1.65247 0.751907L5.5 4.32442L9.34753 0.751907C9.5284 0.583969 9.75859 0.5 10.0381 0.5C10.3176 0.5 10.5478 0.583969 10.7287 0.751907C10.9096 0.919846 11 1.13359 11 1.39313C11 1.65267 10.9096 1.86641 10.7287 2.03435L6.19058 6.24808C6.09193 6.33968 5.98505 6.40472 5.86995 6.44319C5.75486 6.48166 5.63154 6.5006 5.5 6.49999Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </a>
                  <div className="dropdown-content">
                    <Link to="/Blogs">
                      <a className="fs_sm text-white ff_Book" href="#">
                        Blogs
                      </a>
                    </Link>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Documentation{" "}
                    </a>
                  </div>
                </li>
                <li className="dropdown">
                  <a
                    className="fs_sm text-white product position-relative ff_Book"
                    href="#"
                  >
                    Company{" "}
                    <span className="ps-2">
                      <svg
                        width="11"
                        height="7"
                        viewBox="0 0 11 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.5 6.49999C5.36846 6.49999 5.24087 6.47708 5.11722 6.43128C4.99357 6.38548 4.89097 6.32441 4.80942 6.24808L0.2713 2.03435C0.0904331 1.86641 0 1.65267 0 1.39313C0 1.13359 0.0904331 0.919846 0.2713 0.751907C0.452167 0.583969 0.682362 0.5 0.961883 0.5C1.2414 0.5 1.4716 0.583969 1.65247 0.751907L5.5 4.32442L9.34753 0.751907C9.5284 0.583969 9.75859 0.5 10.0381 0.5C10.3176 0.5 10.5478 0.583969 10.7287 0.751907C10.9096 0.919846 11 1.13359 11 1.39313C11 1.65267 10.9096 1.86641 10.7287 2.03435L6.19058 6.24808C6.09193 6.33968 5.98505 6.40472 5.86995 6.44319C5.75486 6.48166 5.63154 6.5006 5.5 6.49999Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </a>
                  <div className="dropdown-content">
                    <a className="fs_sm text-white ff_Book" href="#">
                      About us
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      News{" "}
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Data Security{" "}
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Careers{" "}
                    </a>
                  </div>
                </li>
              </ul>
              <Green_btn any_text="Sign up" />
            </div>
            <div className="d-flex align-items-start  d-lg-none sm_view nav_left0 px_md_100 px-sm-5 ">
              <div className="ps_20 ">
                <a className="fs_sm text-white ff_Book" href="#">
                  Pricing
                </a>
              </div>
              <Accordion className="w-100">
                <Accordion.Item eventKey="0" className="border-0">
                  <Accordion.Header>Products</Accordion.Header>
                  <Accordion.Body className="d-flex flex-column">
                    <a className="fs_sm text-white ff_Book" href="#">
                      Annotab&nbsp;Studio
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Video&nbsp;Annotab{" "}
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Images&nbsp;Annotab{" "}
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Annoations{" "}
                    </a>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="border-0">
                  <Accordion.Header>Solutions</Accordion.Header>
                  <Accordion.Body className="d-flex flex-column">
                    <a className="fs_sm text-white ff_Book" href="#">
                      Healthcare & Medicine{" "}
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Manufacturing{" "}
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Agriculture{" "}
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Aerospace & Defense{" "}
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Automotive{" "}
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Banking & Finance{" "}
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Transportation{" "}
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Oil & Gas{" "}
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Retail & Ecommerce{" "}
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Safety & Security{" "}
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Telecommunications{" "}
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Utilities{" "}
                    </a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="ps_20">
                <a className="fs_sm text-white ff_Book" href="#">
                  Pricing
                </a>
              </div>
              <Accordion className="w-100">
                <Accordion.Item eventKey="0" className="border-0">
                  <Accordion.Header>Resources</Accordion.Header>
                  <Accordion.Body className="d-flex flex-column">
                    <a className="fs_sm text-white ff_Book" href="#">
                      Blogs
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Documentation{" "}
                    </a>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="border-0">
                  <Accordion.Header>Company</Accordion.Header>
                  <Accordion.Body className="d-flex flex-column">
                    <a className="fs_sm text-white ff_Book" href="#">
                      About us
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      News{" "}
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Data Security{" "}
                    </a>
                    <a className="fs_sm text-white ff_Book" href="#">
                      Careers{" "}
                    </a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="ps_20">
                <Green_btn any_text="Sign up" />
              </div>
            </div>
          </div>
        </Container>
      </Nav>
    </div>
  );
};

export default NavBar;
