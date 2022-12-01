import React from "react";
// import "./Header.css";

import Menu from "./Menu";
import Title from "./components_comuns/Title";

function Header(props) {
  return (
    <div className="header">
      <Menu />
      <Title title={props.title} />
    </div>
  );
}

export default Header;
