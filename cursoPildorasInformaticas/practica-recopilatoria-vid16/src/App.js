import "./App.css";
import { useState } from "react";
import ComponenteMultiple from "./components/ComponenteMultiple";

function App() {
  const [servicio, setServicio] = useState("Hotel");
  const [cantidad, setCantidad] = useState(0);

  const selectorServicio = (e) => {
    setServicio(e.target.value);
  };

  return (
    <div className="container">
      <h1>Practica Recopilatoria</h1>
      <div>
        <h2>Seleccione un servicio a consultar</h2>
        <div>
          <input
          type="number"
          placeholder={
            "Ingrese la cantidad de dias que quiere utilizar el " + servicio
          }
          onChange={(e) => setCantidad(Number(e.target.value))}
        />
        <select className="desplegable" onChange={selectorServicio}>
          <option value={"Hotel"}>Hotel</option>
          <option value={"Auto"}>Auto</option>
        </select>
        </div>
        <ComponenteMultiple opcion={servicio} dias={cantidad} />
      </div>
    </div>
  );
}

export default App;
