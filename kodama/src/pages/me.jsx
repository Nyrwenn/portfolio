import "../style/me.scss";
import Header from "../components/header";
import { useState } from "react";

function Me() {
  const [hard, setIsHard] = useState(false);
  const [soft, setIsSoft] = useState(false);

  return (
    <div className="big_wrapper">
      <Header />
      <div className="page_wrapper">
        <div className="skills_wrapper">
          <div className="skills" onClick={() => setIsHard(!hard)}>
            {hard ? (
              <>
                <h2 className="skills_title">Hard Skills</h2>
                <ul>
                  <li>PAO</li>
                  <li>Gestion de projet</li>
                  <li>Développement</li>
                  <li>Conception</li>
                </ul>
              </>
            ) : (
              <div className="skills">
                <h2 className="skills_title">Hard Skills</h2>
              </div>
            )}
          </div>

          <div className="skills" onClick={() => setIsSoft(!soft)}>
            {soft ? (
              <>
                <h2 className="skills_title">Soft Skills</h2>
                <ul>
                  <li>Implication</li>
                  <li>Détermination</li>
                  <li>Réalisme</li>
                  <li>Tolérance</li>
                </ul>
              </>
            ) : (
              <>
                <div className="skills">
                  <h2 className="skills_title">Soft Skills</h2>
                </div>
              </>
            )}
          </div>
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
    </div>
  );
}

export default Me;
