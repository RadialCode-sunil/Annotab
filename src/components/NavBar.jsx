import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import annotab from "../assets/img/png/logo.png";
import Green_btn from "./Green_btn";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [checkboxval, setCheckboxVal] = React.useState(null);

  const handleChangeCheckbox = (e) => {
    setCheckboxVal(e.target.checked);
  };

  if (checkboxval) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div>
      <div className="bg_blur position-relative  z_index_10">
        <Container className="py-3  ">
          <div className="d-flex justify-content-lg-around justify-content-between align-items-center py-0">
            <Link to="/">
              <img className="p-0" src={annotab} alt="annotab logo" />
            </Link>
            <input
              type="checkbox"
              id="check"
              className="d-none"
              onChange={(e) => handleChangeCheckbox(e)}
            />
            <label
              htmlFor="check"
              className="Menuicon d-lg-none position-relative"
            >
              <span></span>
              <span></span>
              <span className="icon_span"></span>
            </label>
            <div className="d-lg-flex d-none align-items-center gap_106  flex-row  w-100">
              <ul className="d-flex mb-0 gap-xl-4 gap-3 p-0 flex-lg-row flex-column justify-content-center w-100">
                <li>
                  <Link to="/">
                    <a className="fs_sm text-white ff_Book main_pages" href="#">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="dropdown">
                  <a
                    className="fs_sm text-white product position-relative ff_Book main_navbar"
                    href="#"
                  >
                    Products{" "}
                    <span className="ps-2 ">
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
                  <div className="dropdown-content ">
                    <Link to="/annotab" className="hover_green py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        Annotab&nbsp;Studio
                      </a>
                    </Link>
                    <Link className="hover_green py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        Video&nbsp;Annotab{" "}
                      </a>
                    </Link>
                    <Link className="hover_green py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        Images&nbsp;Annotab{" "}
                      </a>
                    </Link>
                    <Link className="hover_green py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        Annoations{" "}
                      </a>
                    </Link>
                  </div>
                </li>
                <li className="dropdown">
                  <a
                    className="fs_sm text-white product position-relative ff_Book main_navbar"
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
                  <div className="dropdown-content ">
                    <Link className="hover_green py-2 py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        Healthcare & Medicine{" "}
                      </a>
                    </Link>
                    <Link to="/Manufacturing" className="hover_green py-2 py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        Manufacturing{" "}
                      </a>
                    </Link>
                    <Link to="/Agriculture" className="hover_green py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        Agriculture{" "}
                      </a>
                    </Link>
                    <Link to="/Aerospace" className="hover_green py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        Aerospace & Defense{" "}
                      </a>
                    </Link>
                    <Link to="/Automotive" className="hover_green py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        Automotive{" "}
                      </a>
                    </Link>

                    <Link to="/Banking" className="hover_green py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        Banking & Finance{" "}
                      </a>
                    </Link>

                    <Link to="/Transportation" className="hover_green py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        Transportation{" "}
                      </a>
                    </Link>

                    <Link to="/Oil" className="hover_green py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        Oil & Gas{" "}
                      </a>
                    </Link>

                    <Link to="/Retail" className="hover_green py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        Retail & Ecommerce{" "}
                      </a>
                    </Link>

                    <Link to="/Safety" className="hover_green py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        Safety & Security{" "}
                      </a>
                    </Link>

                    <Link to="/Telecommunications" className="hover_green py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        Telecommunications{" "}
                      </a>
                    </Link>

                    <Link to="/Utilities" className="hover_green py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        Utilities{" "}
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <Link to="/Pricingnav">
                    <a
                      className="fs_sm text-white ff_Book p-0 links main_pages"
                      href="#"
                    >
                      Pricing
                    </a>
                  </Link>
                </li>
                <li className="dropdown">
                  <a
                    className="fs_sm text-white product position-relative ff_Book main_navbar"
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
                    <Link to="/Blogs" className="hover_green py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        Blogs
                      </a>
                    </Link>
                    <Link className="hover_green py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links "
                        href="#"
                      >
                        Documentation{" "}
                      </a>
                    </Link>
                  </div>
                </li>
                <li className="dropdown">
                  <a
                    className="fs_sm text-white product position-relative ff_Book main_navbar"
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
                    <Link className="hover_green py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        About us
                      </a>
                    </Link>
                    <Link className="hover_green py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        News{" "}
                      </a>
                    </Link>
                    <Link className="hover_green py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        Data Security{" "}
                      </a>
                    </Link>
                    <Link className="hover_green py-2">
                      <a
                        className="fs_sm text-white ff_Book p-0 links"
                        href="#"
                      >
                        Careers{" "}
                      </a>
                    </Link>
                  </div>
                </li>
              </ul>
              <Green_btn any_text="Sign&nbsp;up" />
            </div>
            <div className="d-flex align-items-start  d-lg-none sm_view nav_left0 px_md_100 px-sm-5 ">
              <div className="ps_20 pb-1">
                <Link to="/">
                  <a className="fs_sm text-white ff_Book" href="#">
                    Home
                  </a>
                </Link>
              </div>
              <Accordion className="w-100">
                <Accordion.Item eventKey="0" className="border-0">
                  <Accordion.Header>Products</Accordion.Header>
                  <Accordion.Body className="d-flex flex-column py-0">
                    <Link to="/annotab" className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        Annotab&nbsp;Studio
                      </a>
                    </Link>
                    <Link className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        Video&nbsp;Annotab{" "}
                      </a>
                    </Link>
                    <Link className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        Images&nbsp;Annotab{" "}
                      </a>
                    </Link>
                    <Link className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        Annoations{" "}
                      </a>
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="border-0">
                  <Accordion.Header>Solutions</Accordion.Header>
                  <Accordion.Body className="d-flex flex-column py-0">
                    <Link className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        Healthcare & Medicine{" "}
                      </a>
                    </Link>
                    <Link to="/Manufacturing" className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        Manufacturing{" "}
                      </a>
                    </Link>
                    <Link to="/Agriculture" className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        Agriculture{" "}
                      </a>
                    </Link>
                    <Link to="/Aerospace" className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        Aerospace & Defense{" "}
                      </a>
                    </Link>
                    <Link to="/Automotive" className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        Automotive{" "}
                      </a>
                    </Link>

                    <Link to="/Banking" className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        Banking & Finance{" "}
                      </a>
                    </Link>

                    <Link to="/Transportation" className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        Transportation{" "}
                      </a>
                    </Link>

                    <Link to="/Oil" className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        Oil & Gas{" "}
                      </a>
                    </Link>

                    <Link to="/Retail" className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        Retail & Ecommerce{" "}
                      </a>
                    </Link>

                    <Link to="/Safety" className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        Safety & Security{" "}
                      </a>
                    </Link>

                    <Link to="/Telecommunications" className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        Telecommunications{" "}
                      </a>
                    </Link>

                    <Link to="/Utilities" className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        Utilities{" "}
                      </a>
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
                <div className="ps_20 py-0">
                  <a className="fs_sm text-white ff_Book" href="#">
                    Pricing
                  </a>
                </div>
                <Accordion.Item eventKey="3" className="border-0">
                  <Accordion.Header>Resources</Accordion.Header>
                  <Accordion.Body className="d-flex flex-column">
                    <Link to="/Blogs" className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        Blogs
                      </a>
                    </Link>
                    <Link className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70 "
                        href="#"
                      >
                        Documentation{" "}
                      </a>
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="border-0">
                  <Accordion.Header>Company</Accordion.Header>
                  <Accordion.Body className="d-flex flex-column py-0">
                    <Link className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        About us
                      </a>
                    </Link>
                    <Link className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        News{" "}
                      </a>
                    </Link>
                    <Link className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        Data Security{" "}
                      </a>
                    </Link>
                    <Link className="hover_green py-0">
                      <a
                        className="fs_sm text-white ff_Book p-0 links_opacity_70"
                        href="#"
                      >
                        Careers{" "}
                      </a>
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="ps_20">
                <Green_btn any_text="Sign up" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
