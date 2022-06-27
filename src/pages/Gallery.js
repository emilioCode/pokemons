import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Gallery() {
  const [pokemons, setPokemons] = useState([]);
  const [apiPath, setApiPath] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );
  const [next, setNext] = useState("");

  const getMore = () => {
    setApiPath(next);
  };

  useEffect(() => {
    const getPokemons = () => {
      axios.get(apiPath).then((resp) => {
        // debugger;
        setNext(resp.data.next);
        for (let i = 0; i < resp.data.results.length; i++) {
          axios.get(resp.data.results[i].url).then((result) => {
            setPokemons((prevArray) => [...prevArray, result.data]);
          });
        }
      });
    };

    getPokemons();
  }, [apiPath]);

  return (
    <div className="container">
      <div className="row">
        {pokemons.map((pkm, index) => (
          <Card
            col={3}
            title={"No." + pkm.id + " - " + pkm.name}
            image={pkm.sprites.front_default}
            key={index}
          />
        ))}
      </div>
      <br />
      <div className="text-center">
        <span className="btn-link" onClick={getMore}>
          Cargar mas
        </span>
      </div>
      <br />
    </div>
  );
}
