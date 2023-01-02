import React from "react";
import "./Education.css";

import Subtitle from "./components_comuns/Subtitle";
import ItemList from "./components_comuns/ItemList";

function Education() {
  return (
    <div className="education">
      <Subtitle subtitle="Educação" />
      <ul className="education_list">
        <ItemList
          job="IFMS - Ponta Porã"
          time="2018 - 2021"
          function="Técnico Integrado em Informática"
          href="https://www.google.com/maps/place/Instituto+Federal+de+Mato+Grosso+do+Sul+(IFMS)/@-22.619625,-55.609261,15z/data=!4m5!3m4!1s0x0:0x9a9fc4a8e4bf00d!8m2!3d-22.619625!4d-55.609261"
        />
        <ItemList
          job="OneBitCode"
          time="2022 - Atualmente"
          function="Full Stack Javascript"
          href="https://programador.onebitcode.com/"
        />
        <ItemList
          job="Rocketseat"
          time="2022 - Atualmente"
          function="Rocketseat - Discover"
          href="https://app.rocketseat.com.br/discover"
        />
        <ItemList
          job="UFMS - Ponta Porã"
          time="2023 - Atualmente"
          function="Sistemas de Informação"
          href="https://www.google.com/maps/place/UFMS+-+C%C3%A2mpus+de+Ponta+Por%C3%A3/@-22.5818679,-55.6822603,17.29z/data=!4m5!3m4!1s0x94626d22ff65a115:0x9dcfc34bfda0abde!8m2!3d-22.5812447!4d-55.6818176"
        />
      </ul>
    </div>
  );
}

export default Education;
