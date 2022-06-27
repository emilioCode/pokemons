import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Gallery() {
  const [pokemons, setPokemons] = useState([]);
  const [apiPath, setApiPath] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );

  useEffect(() => {
    const getPokemons = () => {
      axios.get(apiPath).then((response) => {
        let array = response.data.results;
        let arrayFtm = {};
        array.forEach((element) => {
          axios
            .get(element.url)
            .then((res) => {
              arrayFtm = {
                name: element.name,
                data: res.data,
              };
            })
            .finally((_) => {
              let scope = pokemons;
              scope.push(arrayFtm);

              setPokemons(scope);
              console.log(pokemons);
            });
          //     debugger
          //                 console.log(pokemons)
          // console.log(arrayFtm)
        });
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
            title={"#" + pkm.data.id + " " + pkm.name}
            image={pkm.data.sprites.front_default}
            description={"Pikachú is the 25th Pokemon in the list"}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
