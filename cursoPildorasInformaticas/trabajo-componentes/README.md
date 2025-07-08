# Curso React. Componentes. Vídeo 13
Un `component` en React es una unidad reutilizable de código que encapsula:

- **Estructura** (HTML/JSX)
- **Estilo** (CSS)
- **Comportamiento** (JavaScript o TypeScript)

Los componentes permiten construir interfaces de usuario complejas dividiéndolas en piezas pequeñas, independientes y reutilizables.

# Curso React. Componentes II. Props. Vídeo 14
Las _props_ (abreviatura de "properties") son argumentos que se pasan a los componentes de React.

Permiten:
- Comunicación entre componentes (padre → hijo)
- Renderizado dinámico basado en datos
- Reutilización de componentes con distintos valores
- Control del comportamiento interno
- Renderizado condicional
- Propagación de eventos personalizados


## Sintaxis componente y prop

    const Saludo = (props) => {
        return (
            <h1>
            Hola {props.usuario.nombre} {props.usuario.apellido}, tienes{" "}
            {props.usuario.edad} años y eres {props.usuario.genero}.
            </h1>
        );
    };

    export default Saludo;

> ⚠️ A partir de React v15.5, el paquete `prop-types` se separó del core y hoy se prefiere el uso de TypeScript para validar tipos de datos en componentes.

Con TypeScript, la validación de tipos se hace en tiempo de desarrollo, de forma más segura, expresiva y escalable.


    // App.tsx --------------------------------------------------------
    import Saludo from "./Saludo";
    import { Usuario } from "./types/Usuario";

    const usuario: Usuario = {
    nombre: "Manuel",
    apellido: "Leunam",
    edad: 24,
    genero: "Masculino",
    };

    function App() {
    return (
        <div>
        <Saludo usuario={usuario} />
        </div>
    );
    }

    // Saludo.tsx -----------------------------------------------------
    import { Usuario } from "./types/Usuario";

    type SaludoProps = {
        usuario: Usuario;
    };

    function Saludo({ usuario }: SaludoProps) {
    return (
        <h1>
        Hola {usuario.nombre} {usuario.apellido}, tienes {usuario.edad} años y eres {usuario.genero}.
        </h1>
    );
    }

    export default Saludo;

    // types/Usuario.ts -----------------------------------------------
    export type Usuario = {
        nombre: string;
        apellido: string;
        edad?: number;    // Opcional
        genero?: string;  // Opcional
    };

## Renderizado condicional
El renderizado condicional consiste en evaluar una condición y renderizar un componente si la condición es verdadera, de lo contrario, no se renderiza el componente.

    function Saludo({ usuario }: SaludoProps) {
        return (
        <div>
            {usuario.nombre ? (
            <h1>
                Hola {usuario.nombre} {usuario.apellido}
            </h1>
            )  : <h1>SIN NOMBRE!</h1>}
            <h2>
            Tienes {usuario.edad} años y eres {usuario.genero}
            </h2>
        </div>
        );
    }

## Destructuración

    function Saludo({ usuario }: SaludoProps) {
        //Destructuracion
        const { nombre, apellido, edad, genero } = usuario;
        return (
            <div>
            <h1> Hola {nombre} {apellido}</h1>
            <h2> Tienes {edad} y eres {genero}</h2>
            </div>
        );
    }



