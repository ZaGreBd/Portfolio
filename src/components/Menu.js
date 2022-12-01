import React, { useState } from "react";
// import "./Menu.css";

import menu_open from "../assets/icons/menu_open.png";
import menu_close from "../assets/icons/menu_close.png";
import MnuBtn from "./components_comuns/MnuBtn";

function Menu() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="menu">
      <button
        className="menu_open"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
          console.log(isNavExpanded);
        }}
      >
        <img src={menu_open} alt="abrir menu" />
      </button>

      <nav className={isNavExpanded ? "menu_opened" : "menu_closed"}>
        <button
          className="menu_close"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
            console.log(isNavExpanded);
          }}
        >
          <img src={menu_close} alt="fechar menu" />
        </button>

        <ul>
          <li>
            <MnuBtn href="/" btnNome="Home" />
          </li>
          <li>
            <MnuBtn href="/projects" btnNome="Projetos" />
          </li>
          <li>
            <MnuBtn href="/posts" btnNome="Publicações" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
