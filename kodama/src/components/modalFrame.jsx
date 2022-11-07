import "../style/modalFrame.scss";

function ModalFrame(props) {
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
