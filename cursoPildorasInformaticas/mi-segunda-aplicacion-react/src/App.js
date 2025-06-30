import "./App.css";
import React, { useState, useRef } from "react";
import video from "./assets/video.mp4";

// App (componente) -> Punto de entrara de la aplicacion, el "main"
// Aca se programa con JSX, una combinacion de HTML y JS
function App() {
  // Definir el estado para almacenar el resultado de la suma
  // resultado es el estado actual, setResultado es la funcion que actualiza el estado
  const [resultado, setResultado] = useState(0);
  const videoRef = useRef(null); // Referencia al video

  // Aca no es valido aplicar estilos como: <h1 style="color: red, text-align: center">...</h1>
  // Para aplicar un estilo, se utiliza la propiedad "className" y App.css
  const elemento = <h1 className="centrar-titulo">Hola Mundo</h1>;
  //const elemento2 = <h2>Suma: {suma(1, 2)}{/*Los comentarios en JavaScript se escriben asi */}</h2>;
  const botonPulsado = () => {
    const result = suma(resultado, 5);
    setResultado(result);
  };

  const videoPlay = () => {
    videoRef.current.play();
  };

  const videoPause = () => {
    videoRef.current.pause();
  };

  const siguienteFotograma = () => {
    videoRef.current.currentTime += 1;
  };

  // El return es lo que vera el usuario
  return (
    <div>
      <button style={{ margin: "10px" }} onClick={botonPulsado}>
        Pulsame
      </button>{" "}
      {/* Aca utilizamos doble llave en el style ya que se pasa como un objeto */}
      <div>{elemento}</div>
      {/* <div>{elemento2}</div> */}
      {/*Evaluacion de "cortocircuito" -> si resultado es null o 0, no se muestra el h2 */}
      <div>
        {resultado !== null && resultado !== 0 && <h2>Suma: {resultado}</h2>}
      </div>
      <video ref={videoRef} style={{ width: "80%", marginLeft: "auto", marginRight: "auto", display: "block" }}>
        <source src={video} type="video/mp4"></source>
      </video>
      <div style={{ textAlign: "center" }}>
        <button onClick={videoPlay}>Play</button>
        <button onClick={videoPause}>Pause</button>
        <button onClick={siguienteFotograma}>Siguiente fotograma</button>
      </div>
    </div>
  );
}

/* const botonPulsado = () => {
  // Esta función es un manejador de eventos que se ejecuta cuando se hace clic en el botón.
  // La función simplemente muestra una alerta en el navegador con el mensaje "Boton pulsado".
  alert(suma(3, 5));
} */

/* 
const nombreFunción = (parámetros) => {
  // cuerpo de la función
} 
*/

// Estructura de la función:
// 1. Declaración de la función: `const botonPulsado = () => { ... }`
//    - Aquí estamos declarando una constante llamada `botonPulsado` y asignándole una función de flecha.
// 2. Cuerpo de la función: `{ alert("Boton pulsado"); }`
//    - Dentro de las llaves `{}`, se define qué acciones realiza la función.
//    - En este caso, utiliza el método `alert()` para mostrar un cuadro de diálogo de alerta.
// 3. Uso de funciones de flecha:
//    - Las funciones de flecha son una forma concisa de escribir funciones en JavaScript.
//    - No tienen su propio `this` y son útiles para mantener el contexto en el que se definen.

function suma(a, b) {
  return a + b;
}

export default App;
