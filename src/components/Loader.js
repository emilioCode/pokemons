import "./styles/Loader.css";

export default function Loader(props) {
  const { hide } = props;
  return (
    <div className="spinner-set" hidden={hide}>
      <div className="spinner-border text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
