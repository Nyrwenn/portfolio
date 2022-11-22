import "../style/portfolio.scss";
import Header from "../components/header";
import Card from "../components/card";
import { useState } from "react";
import ModalFrame from "../components/modalFrame";
import { projects } from "../projects.js";

function Portfolio() {
  const [showFrame, setShowFrame] = useState<boolean>(false);

  const handleToggleFrame = () => {
    setShowFrame(!showFrame);
  };
  return (
    <div className="portfolio_wrapper">
      <Header />
      <div className="cards_wrapper">
        {projects.map((project, i) => (
          <>
            <Card
              key={i}
              project={project}
              show={handleToggleFrame}
              showFrame={showFrame}
            />
            <ModalFrame
              project={project}
              show={showFrame}
              close={handleToggleFrame}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
