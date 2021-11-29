import React from "react";
import "./Home.css";
import image from "../../image/dark.jpg";
import image2 from "../../image/21741257_484032028630091_994397574647945446_o-compressed.jpg";

const Home = () => {
  return (
    <div className="home-page">
      <div className="bg"></div>
      <div>
        <img className="image" src={image} alt="" srcset="" />
      </div>
      <div className="main-section">
        <div className="text">
          <div className="">
            <span className="befor-name"></span>
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

            <div>
              <a href="http://marcel-pirnay.be/" class="btn">
                <svg width="277" height="62">
                  <defs>
                    <linearGradient id="grad1">
                      <stop offset="0%" stop-color="#FF8282" />
                      <stop offset="100%" stop-color="#E178ED" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="5"
                    y="5"
                    rx="25"
                    fill="none"
                    stroke="url(#grad1)"
                    width="266"
                    height="50"
                  ></rect>
                </svg>

                <span>Dowonlode Resume</span>
              </a>
            </div>

            {/* <button className="resume-button">Dowonlode Resume</button> */}
          </div>
        </div>
        <div className="side-button">
          <div className="home-button icon-box">
            <i class="fas fa-home"></i>
          </div>
          <div className="about icon-box">
            <i class="fas fa-user"></i>
          </div>
          <div className="project icon-box">
            <i class="fas fa-briefcase"></i>
          </div>
          <div className="contuact icon-box">
            <i class="far fa-envelope-open"></i>
          </div>
          <div className="blog icon-box">
            <i class="far fa-comments"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
