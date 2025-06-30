import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
  const pesos = useRef(null);
  const [valorDolar, setValorDolar] = useState(null);
  const [valorCambio, setValorCambio] = useState(null);

useEffect(
  () => {
    const llamaApiCambio = async () => {
      try{
        const respuesta = await fetch("https://dolarapi.com/v1/dolares/blue");
        const data = await respuesta.json();
        console.log(data);
        setValorCambio(data.venta);
      }catch(error){
        console.log(error);
      }
    };
    llamaApiCambio();
  }, []
);

  // 'e' -> Es el evento de "submit" del formulario, React lo pasa automaticamente cuando se envia el formulario.
  const convertir = (e) => {
    e.preventDefault();
    const cantidad = parseFloat(pesos.current.value);
    if(!isNaN(cantidad)){
    setValorDolar((pesos.current.value / valorCambio).toFixed(2));
    }else{
      setValorDolar(null);
      alert("Por favor ingrese una cantidad válida");
    }
  };

  return (
    <div>
      <div>
        <h1 className="titulo">
          Conversor de Peso a Dolar
        </h1>
      </div>
      <form onSubmit={convertir} className="entrada">
        <input
          type="number"
          ref={pesos}
          placeholder="Ingrese cantidad en pesos"
        />
        <button type="boton" onClick={convertir}>
          Convertir
        </button>
        </form>
      <div>
        {valorDolar !== null && (
          <h2 type="resultado" className="resultado">
            Resultado: ${valorDolar}.-
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;
