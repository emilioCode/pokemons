import "./styles/Modal.css";

const Modal = (props) => {
  const { id, data } = props;
  const pokemon = data ? data : null;
  const number = pokemon ? pokemon.id : null;
  const name = pokemon ? pokemon.name : null;
  const image = pokemon ? pokemon.sprites.front_default : null;
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {"No." + number + " - " + name}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="card">
              <img src={image} alt={name} />
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center active">
                  abilities:
                </li>
                {pokemon ? (
                  pokemon.abilities.map((e, index) => (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center"
                      key={index}
                    >
                      <span className="badge badge-primary badge-pill">
                        {index + 1}
                      </span>
                      {e.ability.name}
                    </li>
                  ))
                ) : (
                  <></>
                )}
              </ul>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-primary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
