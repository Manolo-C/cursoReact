# Curso de React
Este curso se realizó principalmente con los videos de Juan, de Píldoras Informáticas.
>https://www.pildorasinformaticas.es/course/react/

Hasta el video "Curso React. Fundamentos III. Primera App. Vídeo 5" se trabajó con los elementos de la carpeta "fundamentos" para comparar una aplicación creada con JavaScript, para compararla con la aplicación de React.

## ¿Cómo crear una aplicación con React?
>**npx create-react-app _{NOMBRE_APLICACION}_** 

Si salta un cartel [...]"la ejecución de scripts está deshabilitada en este sistema."[...], se resuelve en la terminal ejecutando:
>**Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass**  
(TEMPORAL EN LA INSTANCIA VIVA DE LA TERMINAL)  

>**Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned**  
(PERMANENTE)

>**Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Restricted** (Luego se puede volver a la configuracion anterior)

Luego de esto, ya podemos iniciar la aplicación.
## ¿Como iniciar una aplicacion con React?
>cd **_{NOMBRE_APLICACION}_**  
>npm start

Otra forma seria yendo a **package.json>"scripts"**, los cuales pueden ser utilizados si se instala el modulo NPM ejecutando:
>npm install -g npm

Luego en Visua Studio, en Explorer, yendo a los 3 puntitos habilitamos **_"NPM Scripts"_**
## ¿Cómo detener una aplicación de React?
Para detener la aplicación de React, debemos pulsar **Ctrl+C** en la terminal.
## ¿Cuál es el punto de entrada de nuestra aplicación?
>**public/index.html** -> _(el cual carga)_ -> **index.js**

## CRA (Create React App) Vs. Vite
Cuando se comienza un nuevo proyecto **_React.js_**, hay varias opciones _"scaffolding"_ (generación de código base (andamiaje) para proyectos, no es una aplicación "Terminada" si no un esqueleto que te permite ahorrar mucho tiempo).  
Dependiendo la complejidad y tamaño del proyecto, se elige un determinado nivel de _"scaffolding"_:
>- **Create React App**:  
>   - Menor configuración inicial (caja cerrada).
>   - Soporte oficial.
>   - Ecosistema estable (compatibilidad y estabilidad).
>   - Variedad en opciones "Defaults".
>   - Extensibilidad.

Utiliza Create React App si:

>- **Vite**:  
>   - Inicio y recargas más rápidas.
>   - Menor uso de recursos.
>   - Configuración más flexible (Mejor si se trabaja con mas de un framework de frontend).
>   - Soporte integrado TypeScript, JSX, CSS.
>   - Soporte HMR mejorado (Hot Module Replacement).
>   - Migración y actualización más fácil.

