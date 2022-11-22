import "../style/modalFrame.scss";
import { Project } from "../Types/types";

interface Props {
  show: boolean;
  close: any;
  project: Project;
}

function ModalFrame(props: Props) {
  const { show, close, project } = props;

  if (!show) {
    return null;
  }

  return (
    <div className="frame_wrapper">
      <iframe
        title={project.title}
        id="Booki"
        src={project.address}
        style={{
          width: "100%",
          height: "100%",
        }}
      ></iframe>
      <button id="close" onClick={() => close()}>
        Fermer{" "}
      </button>
    </div>
  );
}

export default ModalFrame;
