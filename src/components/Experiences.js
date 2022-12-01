import React from "react";
// import "./Experiences.css";

import Subtitle from "./components_comuns/Subtitle";
import ItemList from "./components_comuns/ItemList";

function Experiences() {
  return (
    <div className="experiences">
      <Subtitle subtitle="Experiências" />
      <ul className="experiences_list">
        <ItemList
          job="Ensina Mais"
          time="2021 - 2022"
          function="Professor de robótica"
          href="https://www.google.com/maps/place/Ensina+Mais+-+PP/@-22.5305711,-55.7180046,15z/data=!4m5!3m4!1s0x0:0xec6e5f05c126c84d!8m2!3d-22.5305711!4d-55.7180046"
        />
        <ItemList
          job="Ciarama"
          time="2022 - Atualmente"
          function="Auxiliar de T.I."
          href="https://www.google.com/maps/place/CIARAMA+FAZENDAS/@-22.5461138,-55.7240743,17z/data=!3m1!4b1!4m5!3m4!1s0x94626ef255743463:0xec5527f3f4b14d8f!8m2!3d-22.5461188!4d-55.7218856"
        />
      </ul>
    </div>
  );
}

export default Experiences;
