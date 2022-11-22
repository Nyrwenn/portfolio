import "../style/card.scss";
import { useState } from "react";
import { Project } from "../Types/types";

interface Props {
  show: any;
  showFrame: boolean;
  project: Project;
}

function Card(props: Props) {
  const { show, showFrame, project } = props;
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="card" style={{ display: showFrame ? "none" : "flex" }}>
      <h2 className="project_title">{project.title}</h2>
      <div className="img_container">
        <img
          className="test_img"
          src={project.image}
          alt={project.title}
          onClick={show}
        />
      </div>
      <div className="clic_container">
        <button className="clic_me">
          <a href={project.addressGit} target="blank">
            Link github{" "}
          </a>{" "}
        </button>
        <button className="clic_me" onClick={() => setShowMore(!showMore)}>
          Show more{" "}
        </button>
      </div>
      {showMore ? (
        <div className="showMore">
          <p>{project.description}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Card;
