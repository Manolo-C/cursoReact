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

Luego de esto, ya podemos iniciar la aplicación.
>cd **_{NOMBRE_APLICACION}_**  
>npm start