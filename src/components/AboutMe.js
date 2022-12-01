import React from "react";
import "./AboutMe.css";

import Profile from "./Profile.js";
import Links from "./Links";
import Technologies from "./Technologies";
import Experiences from "./Experiences";
import Education from "./Education";

function AboutMe() {
  return (
    <div className="aboutMe">
      <Profile />
      <Links />
      <Technologies />
      <Experiences />
      <Education />
    </div>
  );
}

export default AboutMe;
