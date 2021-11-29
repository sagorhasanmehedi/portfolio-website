import React from "react";
import "./Home.css";
import image2 from "../../image/IMG_20210106_010859-removebg-preview (1).png";
import resume from "../../image/mehedi-hasan-resume-main-copy.pdf";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <div className="bg"></div>
      <div>
        <img className="image" src={image2} alt="" srcset="" />
      </div>
      <div className="main-section">
        <div className="text">
          <div className="">
            <h1 className="name">
              <span className="name-color"> I'M MEHEDI HASAN.</span> <br />
              WEB DEVLOPER
            </h1>
            <p className="discription">
              I'm a Tunisian based web designer & front‑end developer focused on
              crafting <br /> clean & user‑friendly experiences, I am passionate
              about building excellent <br /> software that improves the lives
              of those around me.
            </p>
            <p className="for-maxWidth-650">
              I'm a Tunisian based web designer & front‑end developer focused on
              crafting clean & user‑friendly experiences, I am passionate about
              building excellent software that improves the lives of those
              around me.
            </p>

            <div>
              <a download="Mehedi Hasan Resume" href={resume} class="btn">
                <svg width="240" height="65">
                  <rect
                    x="1"
                    y="1"
                    rx="27"
                    fill="none"
                    width="218"
                    height="55"
                  ></rect>
                </svg>

                <span>download resume</span>
              </a>
            </div>
          </div>
        </div>
        <div className="button-maxWidth-650">
          <div className="side-button">
            <Link style={{ color: "inherit" }} to="/">
              <div className="home-button icon-box">
                <i class="fas fa-home"></i>
              </div>
            </Link>
            <Link style={{ color: "inherit" }} to="/about">
              <div className="about icon-box">
                <i class="fas fa-user"></i>
              </div>
            </Link>
            <Link style={{ color: "inherit" }} to="/projects">
              <div className="project icon-box">
                <i class="fas fa-briefcase"></i>
              </div>
            </Link>
            <Link style={{ color: "inherit" }} to="/contact">
              <div className="contuact icon-box">
                <i class="far fa-envelope-open"></i>
              </div>
            </Link>
            <Link style={{ color: "inherit" }} to="/contact">
              <div className="blog icon-box">
                <i class="far fa-comments"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
