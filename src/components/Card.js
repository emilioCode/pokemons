export default function Card(props) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
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
