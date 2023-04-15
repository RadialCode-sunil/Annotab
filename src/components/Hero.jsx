import React from "react";
import NavBar from "./NavBar";
import pcImg1 from "../assets/img/png/pc_img1.png";
import pcImg2 from "../assets/img/png/pc_img2.png";
import pcImg3 from "../assets/img/png/pc_img3.png";
import curlyLine from "../assets/img/png/curly_line.png";
import { Col, Container } from "react-bootstrap";
import purplelight from "../assets/img/png/purple_light.png";
import herogreenLight from "../assets/img/png/hero_green_light.png";
import Green_btn from "./Green_btn";
import { Link } from "react-router-dom";
import linear_bg from "../assets/img/png/linear_bg_black.png";
import AiTool1 from "../assets/img/png/hero_sm_circle1.png";
import AiTool2 from "../assets/img/png/hero_sm_circle2.png";
import AiTool3 from "../assets/img/png/hero_sm_circle3.png";
import AiTool4 from "../assets/img/png/hero_sm_circle4.png";

const Hero = () => {
  return (
    <div>
      <header className="bg_black_blue d-flex min_vh_100 flex-column dotted_bg position-relative linear_background Overflow_x_hidden">
        <NavBar />
        <section className="d-flex flex-column flex-grow-1 justify-content-end position-relative z-0">
          <Container className="pt-5 Containerxxxl">
            <div className="d-flex flex-column align-items-center pt-5">
              <h2 className="text-center fs_4xl ff_Bold white pb-3">
                One place to build deploy{" "}
                <span className="d-block text-center sky ff_Bold">
                  AI models
                </span>
              </h2>
              <p className="fs_sm grey ff_Book opacity_70 pb-4 mb-3 text-center">
                Join our beta program for your Annotation solutions
              </p>
              <div className="pb-5">
                <Link to="/annotab">
                  <Green_btn any_text="Explore" />
                </Link>
              </div>
              <div className="d-flex d-xl-none justify-content-center flex-row gap-md-5 gap-sm-4 gap-3 position-relative ai_tool_line    mb-5 ">
                <span className="ai_tool_width position-relative z_index_2">
                  <img className="w-100" src={AiTool1} alt="ai tools" />
                </span>
                <span className="ai_tool_width position-relative z_index_2">
                  <img className="w-100" src={AiTool2} alt="ai tools" />
                </span>
                <span className="ai_tool_width position-relative z_index_2">
                  <img className="w-100" src={AiTool3} alt="ai tools" />
                </span>
                <span className="ai_tool_width position-relative z_index_2">
                  <img className="w-100" src={AiTool4} alt="ai tools" />
                </span>
              </div>
              <div className="d-flex flex-sm-row flex-column w-100 justify-content-center pt-3 curly_line_bg gap_87 position-relative ">
                <div className="max_width270 position-relative index_1">
                  <img className="w-100 px-5 px-sm-0" src={pcImg1} alt="img" />
                </div>
                <div className="max_width270 position-relative index_1">
                  <img className="w-100 px-5 px-sm-0" src={pcImg2} alt="img" />
                </div>
                <div className="max_width270 position-relative index_1">
                  <img className="w-100 px-5 px-sm-0" src={pcImg3} alt="img" />
                </div>
                <div className=" position-absolute top_47p d-sm-block d-none">
                  <img src={curlyLine} alt="line" />
                </div>
              </div>
            </div>
          </Container>
          <div className="blue_light  home_bluelight_position"></div>
          <div className="green_light  home_greenlight_position"></div>
          <div className="linear_hero_bottom">
            <div className="w-100 h-100 linear_black_bg"></div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Hero;
