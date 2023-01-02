import React from "react";
import "./Profile.css";

import Foto from "../assets/photos/eu.jpg";

function Profile() {
  return (
    <div className="profile">
      <div className="profile_content">
        <div id="photo_icon">
          <img src={Foto} alt="foto do autor" />
        </div>
        <h1>Pedro Batista Godoy Neto</h1>
        <p>Front-end Developer</p>
      </div>
    </div>
  );
}

export default Profile;
