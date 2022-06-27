import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.min.js';
import img from './assets/logo-pokemon.png';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const app = {
    title: "Pokemon",
    with: "15%",
    bgcolor: "#ed514d",
    routes: [
      { name: "Pokemons", path: "/pokemons", component: null },
      { name: "About", path: "/about", component: <About /> }
    ]
  }
  return (
    <>
    <Router>
      <NavBar img={img} name={app.title} width={app.with} routes={app.routes} bgcolor={app.bgcolor}/>
    
      <Routes>
        <Route path='/' element={<Home img={img} alt={app.title} width={"50%"}/>}/>
        {
          app.routes.map((a, index)=>{
            return <Route path={a.path} element={a.component} key={index}/>
          })
        }
      </Routes>
    </Router>
    </>
  );
}

export default App;
