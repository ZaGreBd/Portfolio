import React from "react";
import "./Links.css";

import iconMap from "../assets/icons/map-pin.svg";
import iconBriefcase from "../assets/icons/briefcase.svg";
import iconGithub from "../assets/icons/github.svg";
import iconLinkedin from "../assets/icons/linkedin.svg";
import iconTwitter from "../assets/icons/twitter.svg";
import iconGlobe from "../assets/icons/globe.svg";
import iconMail from "../assets/icons/mail.svg";
import Link from "./components_comuns/Link.js";

function Links() {
  return (
    <div className="links">
      <Link
        icon={iconMap}
        alt="Ícone de mapa"
        text="Ponta Porã - MS, Brasil"
        href="https://www.google.com/maps/place/Ponta+Por%C3%A3,+MS,+79900-000/@-21.7931665,-57.766663,6.91z/data=!4m5!3m4!1s0x94626e42ab20f45f:0xfdb5c29aa48113a7!8m2!3d-22.5373117!4d-55.7282499"
      />
      <Link
        icon={iconBriefcase}
        alt="Ícone de maleta"
        text="Ciarama"
        href="https://www.google.com/maps/place/CIARAMA+FAZENDAS/@-22.5461138,-55.7240743,17z/data=!3m1!4b1!4m5!3m4!1s0x94626ef255743463:0xec5527f3f4b14d8f!8m2!3d-22.5461188!4d-55.7218856"
      />
      <Link
        icon={iconGithub}
        alt="Ícone do github"
        text="ZaGreBd"
        href="https://github.com/ZaGreBd"
      />
      <Link
        icon={iconLinkedin}
        alt="Ícone do linkedin"
        text="pedroneto-zagrebd"
        href="https://www.linkedin.com/in/pedroneto-zagrebd/"
      />
      <Link
        icon={iconTwitter}
        alt="Ícone do twitter"
        text="Pbg_Neto"
        href="https://twitter.com/Pbg_Neto"
      />
      <Link
        icon={iconGlobe}
        alt="Ícone de globo"
        text="https://zagrebd.github.io/Portfolio"
        href="https://zagrebd.github.io/Portfolio"
      />
      <Link
        icon={iconMail}
        alt="Ícone de email"
        text="pbg.neto.dev@gmail.com"
        href="mailto:pbg.neto.dev@gmail.com"
      />
    </div>
  );
}

export default Links;
