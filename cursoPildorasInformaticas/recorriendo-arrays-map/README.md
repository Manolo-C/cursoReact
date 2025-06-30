# Curso React. Recorriendo arrays con map(). Vídeo 12.
## Arrays estaticos.
        const miArrayEstatico = () => {
        const array = [1, 2, 3, 4, 5];
        return (
        <p>
            {array.map((numero, index) => {
            return <span key={index}>&nbsp;[{index}]{numero}</span>;
            })}</p>);};

### 🔍 Explicación del código
- Define un array fijo: [1, 2, 3, 4, 5]
- Usa .map() para recorrerlo y generar elementos <span>.
- Cada elemento tiene una key={index} (aceptable en arrays estáticos).

## Arrays dinámicos.
    const miArrayDinamico = () => {
        const numerosArray = [
        { id: 0, numero: 24 },
        { id: 1, numero: 12 }];
        return (<p>{numerosArray.map((item) => {
            return <span key={item.id}>&nbsp;[{item.id}]{item.numero}</span>
            })}</p>);};

### 🔍 Explicación del código
- Usa un array de objetos con id y numero.
- Cada objeto se renderiza como <span key={item.id}>.
- Se usa item.id como clave única, lo cual es una buena práctica.
