import logo from "./logo.svg";
import "./App.css";
import { Contador } from "./components/MiComponente";
import PropTypes from "prop-types";

function App() {
  const usuario = {
    nombre: "Fernando",
    apellido: "Leunam",
    edad: 24,
    genero: "Masculino",
  };

  function Saludo(props) {
    return (
      <h1>
        Hola {props.usuario.nombre} {props.usuario.apellido}, tienes{" "}
        <strong>{props.usuario.edad}</strong> anios y eres{" "}
        {props.usuario.genero}
      </h1>
    );
  }

  // Esto es una advertencia al programador, no un "error" para el usuario.
  /* Saludo.propTypes = {
    usuario: PropTypes.shape({
      nombre: PropTypes.string.isRequired
    }).isRequired
  } */

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ animation: "App-logo-spin infinite 20s linear" }}
        />
        <p>
          <Contador />
        </p>
        <p>
          <Saludo usuario={usuario} />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
