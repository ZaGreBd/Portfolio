import React from "react";
import "./Subtitle.css";

function Subtitle(props) {
  return (
    <div className="subtitle">
      <h2>{props.subtitle}</h2>
    </div>
  );
}

export default Subtitle;
