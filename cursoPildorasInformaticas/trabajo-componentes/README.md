# Curso React. Componentes. Vídeo 13
Un ``component`` en React es una unidad reutilizable de código que encapsula **estructura (HTML)**, **estilo (CSS)** y **comportamiento (JavaScript)** para construir interfaces de usuario.

# Curso React. Componentes II. Props. Vídeo 14
Las _Props_ son propiedades que se pasan a un componente como argumentos.
- Facilitan la comunicacion y gestion de datos entre componentes.
- Renderizado dinámico.
- Facilitan la reutilizacion de componentes.
- Control de comportamiento en componentes.
- Renderizados condicionales.
- Propagación de eventos.  

### Sintaxis componente y prop

    const Saludo = (props) => {
        return (
            <h1>Hola {props.usuario.nombre} {props.usuario.apellido}, 
            tienes {props.usuario.edad} anios y eres {props.usuario.genero}</h1>
        )
    }
    export default Saludo;