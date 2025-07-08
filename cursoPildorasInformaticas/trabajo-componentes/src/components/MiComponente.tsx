import "./MiComponente.css";
import { useState } from "react";

const MiComponente = () => {
  return <div>Hola alumnos</div>;
};
const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button onClick={() => decrementar()}>-</button>
      <input style={{textAlign: 'center'}} type="text" size="2" value={contador}></input>
      <button onClick={() => incrementar()}>+</button>
    </div>
  );
};

export { MiComponente, Contador };