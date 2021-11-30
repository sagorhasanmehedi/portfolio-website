import React from "react";
import "./Projects.css";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import roam from "../../image/screencapture-assignment-11-clint-side-netlify-app-2021-11-30-12_00_00 (1).png";
import nj from "../../image/nj.png";
import quadex from "../../image/quadex.jpg";

const Projects = () => {
  const hellow = { name: "mehedi" };
  return (
    <div className="projects-page">
      <div className="heading">
        <h1 className="title-bg">WORKS</h1>
        <h1 className="title">
          MY <span className="title-span">PROJECTS</span>
        </h1>
      </div>
      <div className="main-section">
        <Container sx={{ flexGrow: 1 }}>
          <Grid container sx={{ pb: 10, pt: 4 }} spacing={{ xs: 2, md: 4 }}>
            <Grid
              sx={{ display: "flex", justifyContent: "center" }}
              item
              md={4}
            >
              <div className="project-thumbnail">
                <img src={nj} alt="" />
                <div className="project-info">
                  <div className="project-inner-text">
                    <h4>Travel Agency Website</h4>
                    <p>
                      Using React,node js,Express js, Mongodb,Firebase. A fully
                      functional, full-stack web app based on MERN
                    </p>
                    <a href="https://assignment-11-clint-side.netlify.app/">
                      {" "}
                      <button className="regular-btn btn-2">Preview</button>
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid
              sx={{ display: "flex", justifyContent: "center" }}
              item
              md={4}
            >
              <div className="project-thumbnail">
                <img src={quadex} alt="" />
                <div className="project-info">
                  <div className="project-inner-text">
                    <h4>Travel Agency Website</h4>
                    <p>
                      Using React,node js,Express js, Mongodb,Firebase. A fully
                      functional, full-stack web app based on MERN
                    </p>
                    <a href="https://assignment-11-clint-side.netlify.app/">
                      {" "}
                      <button className="regular-btn btn-2">Preview</button>
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid
              sx={{ display: "flex", justifyContent: "center" }}
              item
              md={4}
            >
              <div className="project-thumbnail">
                <img src={roam} alt="" />
                <div className="project-info">
                  <div className="project-inner-text">
                    <h4>Travel Agency Website</h4>
                    <p>
                      Using React,node js,Express js, Mongodb,Firebase. A fully
                      functional, full-stack web app based on MERN
                    </p>
                    <a href="https://assignment-11-clint-side.netlify.app/">
                      {" "}
                      <button className="regular-btn btn-2">Preview</button>
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>

        <div className="side-button-section">
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
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              to="/blog"
            >
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

export default Projects;
