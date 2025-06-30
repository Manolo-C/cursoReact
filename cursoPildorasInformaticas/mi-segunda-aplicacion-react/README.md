# Curso React. JSX I. Video 7
Comenzando por **_App.js_**, el "main" del proyecto, aprendimos como es la estructura, return y aplicar estilos correctamente. 
# Curso React. JSX II. Manejo de eventos. Video 8
Es preferible colocar los componentes en **_App.js_**, para poder reutilizarlos mas facilmente, ademas que React sigue flujo unidireccional, yendo del padre a los hijos.  
En React, un atributo _style_ de un elemento HTML se pasa como un objeto de JavaScript, el cual va entre llaves, y al pasarle un objeto _style_, va nuevamente entre llaves.  
><button style={{margin: "10px"}}>Pulsame</button>  
Aca utilizamos doble llave en el style ya que se pasa como un objeto.

## UseState()
Es un hook que nos permite utilizar el estado en componentes funcionales.
Se utiliza para cambiar el estado de una variable, y al hacerlo, se vuelve a renderizar el componente.
Se utiliza de la siguiente manera:

const [variable, setVariable] = React.useState(valorInicial);

Donde:
- variable es el estado actual.
- setVariable es la funcion que nos permite cambiar el valor del estado.
- valorInicial es el valor que se le asigna por defecto a la variable.

# Curso React. JSX III. useState vs useRef. Vídeo 9
## UseState Vs. UseRef
Un _Hook_ es una función que nos permite utilizar el estado en componentes funcionales.
La diferencia entre _UseState_ y _UseRef_ es que _UseState_ nos permite cambiar el estado de una variable, y _UseRef_ nos permite acceder al estado de una variable sin cambiarlo.

¿Cuando utilizar UseState y UseRef?
> **useState**: Se utiliza para cambiar el estado de una variable, y al hacerlo, se vuelve a renderizar el componente.

> **useRef**: Se utiliza para acceder al estado de una variable sin cambiarlo.

## Diferencias entre UseState y UseRef
| Propiedad | UseState | UseRef |
| --- | --- | --- |
|Proposito| Se utiliza para crear y gestionar el estado en componentes funcionales de React. | Se utiliza para crear una referenca mutable que persiste entre renderizaciones. Utilizado para acceder directamente al DOM. |
|Cuando usarlo|Se utiliza cuando se necesita cambiar el estado de una variable y se vuelve a renderizar el componente. | Se utiliza cuando se necesita acceder al estado de una variable sin cambiarlo. |
|Reactividad | Es reactivo. Los cambios en el estado desecadena un re-renderizado del componente. | No es reactivo. Los cambios en el estado no desecadena un re-renderizado del componente. |
|Sintaxis |  [state, setState] = useState(initialState) | const ref =useRef(variable) |