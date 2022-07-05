import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";

export default function Gallery(props) {
  const { setLoading, $ } = props;
  const [pokemons, setPokemons] = useState([]);
  const [apiPath, setApiPath] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );
  const [next, setNext] = useState("");
  const [pokemon, setPokemon] = useState(null);

  const getMore = () => {
    setApiPath(next);
  };

  useEffect(() => {
    const getPokemons = () => {
      setLoading(false);
      axios
        .get(apiPath)
        .then((resp) => {
          setNext(resp.data.next);
          for (let i = 0; i < resp.data.results.length; i++) {
            axios.get(resp.data.results[i].url).then((result) => {
              setPokemons((prevArray) => [...prevArray, result.data]);
            });
          }
        })
        .finally((_) => {
          setTimeout(() => {
            setLoading(true);
          }, 1000);
        });
    };

    getPokemons();
  }, [apiPath]);

  const showModal = (value) => {
    // debugger;
    // console.log(value);
    setPokemon(value);
    $("#myModal").modal("show");
  };

  return (
    <div className="container">
      <Modal id={"myModal"} data={pokemon} />
      <div className="row">
        {pokemons.map((pkm, index) => (
          <Card
            title={"No." + pkm.id + " - " + pkm.name}
            image={pkm.sprites.front_default}
            key={index}
            onClick={() => showModal(pkm)}
          />
        ))}
      </div>
      <br />
      <div className="text-center">
        {pokemons.length > 0 ? (
          <span className="btn btn-outline-danger" onClick={getMore}>
            More...
          </span>
        ) : (
          <></>
        )}
      </div>
      <br />
    </div>
  );
}
