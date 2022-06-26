import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import img from './assets/logo-pokemon.png';
import NavBar from './components/NavBar';

function App() {
  const app = {
    title: "Pokemon",
    with: "15%",
    bgcolor: "#ed514d",
    routes: [
      { name: "Pokemons", path: "/pokemons", component: null },
      { name: "About", path: "/about", component: null }
    ]
  }
  return (
    <>
    <NavBar img={img} name={app.title} width={app.with} routes={app.routes} bgcolor={app.bgcolor}/>
    
    </>
  );
}

export default App;
