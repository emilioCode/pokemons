export default function Card(props) {
  const col = "col-" + props.col;
  return (
    <div className={col}>
      <br />
      <div className="card">
        <div className="card-body"></div>
        <img src={props.image} alt={props.title} />
        <div className="card-body">
          <h5>{props.title}</h5>
        </div>
      </div>
    </div>
  );
}
