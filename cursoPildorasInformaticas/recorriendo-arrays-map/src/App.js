import logo from "./logo.svg";
import "./App.css";

function App() {
  const miArrayEstatico = () => {
    const array = [1, 2, 3, 4, 5];
    return (
      <p>
        {array.map((numero, index) => {
          return <span key={index}>&nbsp;[{index}]{numero}</span>;
        })}
      </p>
    );
  };

  const miArrayDinamico = () => {
    const numerosArray=[
      {id:0,numero:24},
      {id:1,numero:12},
      {id:2,numero:32},
      {id:3,numero:123},
      {id:4,numero:42},
      {id:5,numero:545}
    ];
    return (
      <p>
        {numerosArray.map((item)=>{
          return <span key={item.id}>&nbsp;[{item.id}]{item.numero}</span>
        })}
      </p>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Numeros del array:</h1>
          {miArrayDinamico()}
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
