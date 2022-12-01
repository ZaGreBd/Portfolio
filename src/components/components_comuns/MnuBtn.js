import React from "react";
import { Link } from "react-router-dom";
import "./MnuBtn.css";

function MnuBtn(props) {
  return (
    <div className="mnuBtn">
      <Link to={props.href} style={{ textDecoration: "none" }}>
        <p>{props.btnNome}</p>
      </Link>
    </div>
  );
}

export default MnuBtn;
