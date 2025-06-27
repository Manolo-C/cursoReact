import './App.css';

// App (componente) -> Punto de entrara de la aplicacion, el "main"
// Aca se programa con JSX, una combinacion de HTML y JS
function App() {
  // Aca no es valido aplicar estilos como: <h1 style="color: red, text-align: center">...</h1>
  // Para aplicar un estilo, se utiliza la propiedad "className" y App.css
  const elemento=<h1 className="centrar-titulo">Hola Mundo</h1>
  // El return es lo que vera el usuario
  return <div>{elemento}</div>
}

export default App;
