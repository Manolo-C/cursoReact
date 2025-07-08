import logo from "./logo.svg";
import "./App.css";
import { Contador } from "./components/MiComponente.tsx";
import { Usuario } from "./Usuario.ts";

function App() {
  // PropTypes quedo deprecado, se reemplaza por TS.
  type SaludoProps = {
    usuario: Usuario;
  };

  const usuario = {
    nombre: "Manuel",
    apellido: "Leunam",
    edad: 24,
    genero: "Masculino",
  };

  function Saludo({ usuario }: SaludoProps) {
    //Destructuracion
    const { nombre, apellido, edad, genero } = usuario;

    return (
      <div>
        {nombre ? (
          <div>
            <h1>
              Hola {nombre} {apellido}!
            </h1>
            <h2>Edad: {edad}</h2>
            <h2>Genero: {genero}</h2>
          </div>
        ) : (
          <h1>No hay usuario valido</h1>
        )}
      </div>
    );
  }

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
