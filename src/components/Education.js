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
          job="UFGD"
          time="2022 - Atualmente"
          function="Sistemas de Informação"
          href="https://www.google.com/maps/place/FACET+-+Faculdade+de+Ci%C3%AAncias+Exatas+e+Tecnologia/@-22.1959567,-54.9340503,17z/data=!4m12!1m6!3m5!1s0x9489ad45952f447d:0x641a973301d9e7ce!2sUniversidade+Federal+da+Grande+Dourados+(UFGD)+-+Unidade+II!8m2!3d-22.1959617!4d-54.9318616!3m4!1s0x9489adc6ca6283ef:0xab367ee04ede8e26!8m2!3d-22.1947314!4d-54.9335618"
        />
        <ItemList
          job="OneBitCode"
          time="2021 - Atualmente"
          function="Programação Full Stack"
          href="https://programador.onebitcode.com/"
        />
      </ul>
    </div>
  );
}

export default Education;
