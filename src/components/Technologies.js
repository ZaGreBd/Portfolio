import React from "react";
import "./Technologies.css";

import Subtitle from "./components_comuns/Subtitle";
import Tech from "./components_comuns/Tech";

function Technologies() {
  return (
    <div className="technologies">
      <Subtitle subtitle="Tecnologias" />
      <div className="technologies_grid">
        <Tech text="HTML" />
        <Tech text="CSS" />
        <Tech text="JAVASCRIPT" />
        <Tech text="SASS" />
        <Tech text="GIT" />
        <Tech text="GITHUB" />
        <Tech text="REACTJS" />
        <Tech text="NODEJS" />
        <Tech text="RUBY" />
      </div>
    </div>
  );
}

export default Technologies;
