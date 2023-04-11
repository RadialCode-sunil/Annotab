import React from "react";
import { Container, Nav } from "react-bootstrap";
import annotab from "../assets/img/png/logo.png";
import GreenButton from "./GreenButton";

const NavBar = () => {
  return (
    <div>
      <Nav className="bg_blur">
        <Container className="py-3">
          <div className="d-flex justify-content-around align-items-center py-1">
            <img src={annotab} alt="annotab logo" />
            <ul className="d-flex mb-0 gap-4 p-0">
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
            <GreenButton />
          </div>
        </Container>
      </Nav>
    </div>
  );
};

export default NavBar;
