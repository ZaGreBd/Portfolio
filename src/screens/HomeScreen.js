import React from "react";
import "./HomeScreen.css";

import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Posts from "../components/Posts";
import Footer from "../components/Footer";

function HomeScreen() {
  return (
    <div className="home_screen">
      <div className="header_screen">
        <Header title="Portfólio" />
      </div>
      <div className="container_screen">
        <div className="aboutMe_screen">
          <AboutMe />
        </div>
        <div className="content_screen">
          <div className="projects_screen">
            <Projects />
          </div>
          <div className="posts_screen">
            <Posts />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomeScreen;
