import React from "react";
import "./Link.css";

function Link(props) {
  return (
    <div className="link">
      <a href={props.href} target="_blank" rel="noreferrer">
        <img src={props.icon} alt={props.alt} />
      </a>
      <a href={props.href} target="_blank" rel="noreferrer">
        <p>{props.text}</p>
      </a>
    </div>
  );
}

export default Link;
