import "../style/me.scss";
import Header from "../components/header";
import { useState } from "react";
import htmlLogo from "../img/html-5.png";
import cssLogo from "../img/css-3.png";
import sassLogo from "../img/sass.png";
import jsLogo from "../img/js.png";
import reactLogo from "../img/react.png";
import nodeLogo from "../img/nodejs.png";
import gitLogo from "../img/github2.png";
import dataLogo from "../img/database.png";

function Me() {
  const [hard, setIsHard] = useState(false);
  const [soft, setIsSoft] = useState(false);
  const images = [
    htmlLogo,
    cssLogo,
    sassLogo,
    jsLogo,
    reactLogo,
    nodeLogo,
    gitLogo,
    dataLogo,
  ];

  let counter = 0;

  return (
    <div className="big_wrapper">
      <Header />
      <div className="page_wrapper">
        <div className="skills_wrapper">
          <div className="skills" onClick={() => setIsHard(!hard)}>
            <h2 className="skills_title">Hard Skills</h2>
          </div>
          {hard && (
            <>
              <ul>
                <li>PAO</li>
                <li>Gestion de projet</li>
                <li>Développement</li>
                <li>Conception</li>
              </ul>
            </>
          )}

          <div className="skills" onClick={() => setIsSoft(!soft)}>
            <h2 className="skills_title">Soft Skills</h2>
          </div>
          {soft && (
            <>
              <ul>
                <li>Implication</li>
                <li>Détermination</li>
                <li>Réalisme</li>
                <li>Tolérance</li>
              </ul>
            </>
          )}
        </div>
        <div className="container_one">
          <div className="circle"></div>
          <h1 className="title_me"> Fanny Paris </h1>
          <p className="description_me">
            {" "}
            C'est ici que je me présente? Alors moi c'est Fanny, il y a quelque
            temps je travaillais dans la sérigraphie et la PAO, une expérience
            qui m'a permis d'avoir un attrait particulier pour le web.
            Aujourd'hui je suis développeur web fullstack, ça veut dire que je
            peux réaliser des sites web et des applications tant du côté front
            que du côté back ! J'aime beaucoup l'idée de pouvoir créer un projet
            dans son entièreté et je suis convaincue que de lier mon expérience
            graphique et mon métier de développeur peut faire un beau mélange.
          </p>
        </div>
      </div>
      <div className="all_stacks">
        {images.map((image, i) => (
          <div
            className="prog"
            key={i}
            style={{
              backgroundImage: `url(${image})`,
              "--order": `${counter++}`,
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundSize: "contain",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Me;
