import React from "react";
import "./Language.css";

function Language(props) {
  let color = props.language;

  switch (color) {
    case "HTML":
      return <div className="language" id="html"></div>;

    case "CSS":
      return <div className="language" id="css"></div>;

    case "JavaScript":
      return <div className="language" id="js"></div>;

    case "Dart":
      return <div className="language" id="dart"></div>;
    
    case "TSQL":
      return <div className="language" id="tsql"></div>;

    case "C++":
      return <div className="language" id="cpp"></div>;

    case "C":
      return <div className="language" id="c"></div>;

    default:
      return <div className="language"></div>;
  }
}

export default Language;
