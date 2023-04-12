import React from "react";
import { Container, Nav } from "react-bootstrap";
import annotab from "../assets/img/png/logo.png";
import Green_btn from "./Green_btn";

const NavBar = () => {
  return (
    <div>
      <Nav className="bg_blur">
        <Container className="py-3">
          <div className="d-flex justify-content-lg-around justify-content-between align-items-center py-1">
            <img src={annotab} alt="annotab logo" />
            <input type="checkbox" id="check" className="d-none" />
            <label htmlFor="check" className="Menuicon d-lg-none">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <div className="d-lg-flex d-none align-items-center gap_106  flex-row ">
              <ul className="d-flex mb-0 gap-4 p-0 flex-lg-row flex-column">
                <li>
                  <a className="fs_sm text-white" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <select
                    className="border-0 bg-transparent fs_sm text-white outline_none"
                    name="Products"
                  >
                    <option className="fs_sm text-white" value="Products">
                      Products
                    </option>
                    <option className="fs_sm text-white" value="saab">
                      Products
                    </option>
                    <option className="fs_sm text-white" value="opel">
                      Opel
                    </option>
                    <option className="fs_sm text-white" value="audi">
                      Audi
                    </option>
                  </select>
                </li>
                <li>
                  <select
                    className="border-0 bg-transparent fs_sm text-white outline_none"
                    name="Solutions"
                  >
                    <option className="fs_sm text-white" value="Resources">
                      Resources
                    </option>
                    <option className="fs_sm text-white" value="saab">
                      Products
                    </option>
                    <option className="fs_sm text-white" value="opel">
                      Opel
                    </option>
                    <option className="fs_sm text-white" value="audi">
                      Audi
                    </option>
                  </select>
                </li>
                <li>
                  <a className="fs_sm text-white" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <select
                    className="border-0 bg-transparent fs_sm text-white outline_none"
                    name="Resources"
                  >
                    <option className="fs_sm text-white" value="Resources">
                      Resources
                    </option>
                    <option className="fs_sm text-white" value="saab">
                      Products
                    </option>
                    <option className="fs_sm text-white" value="opel">
                      Opel
                    </option>
                    <option className="fs_sm text-white" value="audi">
                      Audi
                    </option>
                  </select>
                </li>
                <li>
                  <select
                    className="border-0 bg-transparent fs_sm text-white outline_none"
                    name="Company"
                  >
                    <option className="fs_sm text-white" value="Company">
                      Company
                    </option>
                    <option className="fs_sm text-white" value="saab">
                      Products
                    </option>
                    <option className="fs_sm text-white" value="opel">
                      Opel
                    </option>
                    <option className="fs_sm text-white" value="audi">
                      Audi
                    </option>
                  </select>
                </li>
              </ul>
              <Green_btn any_text="Sign up" />
            </div>
          </div>
        </Container>
      </Nav>
    </div>
  );
};

export default NavBar;
