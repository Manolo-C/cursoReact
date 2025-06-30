
# Curso React – Ejercicio Práctico: Conversor Peso-Dólar (Video 10)

> **Consigna:**  
Crear una página web que contenga como título _"Conversor Peso-Dólar"_, junto con un campo de texto para ingresar un valor en pesos argentinos. Al pulsar un botón **"Enviar"**, debe mostrar el equivalente en dólares.

## 🧩 Componentes requeridos:
- Título
- Campo de texto
- Botón
- Resultado en dólares

---

### 🗂️ Guardar recursos: carpeta `public/` vs `src/`

#### 📁 `public/`
- Los archivos dentro de `public/` **no son procesados por Webpack**, lo que permite un acceso más rápido.
- **No aumentan** el tamaño del *bundle* (el archivo único generado con todo el código y dependencias).
- Son accesibles **directamente desde la URL del navegador**, por ejemplo:  
  `http://localhost:3000/logo.png`
- Ideales para:
  - Archivos estáticos globales
  - Favicons
  - Imágenes públicas
  - Archivos como `robots.txt`, `manifest.json`, etc.
- ❌ **Desventajas:**
  - No se aplican optimizaciones (compresión, minimización, hash)
  - No hay control de dependencias ni validaciones
  - Mayor riesgo de que queden archivos sin uso

#### 📂 `src/`
- Los archivos ubicados en `src/` **sí son procesados por Webpack**, aplicando optimizaciones como:
  - Minimización
  - Renombrado con hash (para evitar problemas de caché)
  - Eliminación de recursos no utilizados (tree-shaking)
- Los archivos deben ser **importados explícitamente** desde el código, por ejemplo:  
  
    import logo from './assets/logo.png';

- ✅ **Ventajas:**
  - Mejor organización y trazabilidad
  - Recursos optimizados automáticamente
  - Solo se incluye lo que realmente se usa
- ❌ **Desventajas:**
  - Tiempo de compilación ligeramente mayor
  - No se puede acceder directamente desde la URL del navegador
  - Menos práctico para recursos globales

---

> ⚠️ Recomendación:  
Usar `public/` para recursos estáticos globales que no cambian, y `src/` para archivos ligados al código y componentes React.

# Curso React. Ejercicio práctico. Conversor Euro II. Llamada API externa. Vídeo 11

## 🔄 useEffect – ¿Qué es y para qué sirve?
useEffect es un hook de React que permite ejecutar efectos secundarios en componentes funcionales. Es decir, acciones que ocurren por fuera del renderizado normal, como:
- Llamadas a APIs
- Acceso a localStorage o sessionStorage
- Subscribirse a WebSockets
- Temporizadores con setTimeout / setInterval
- Manipulación del DOM (en casos puntuales)
> useEffect(() => {  
  // Código que se ejecuta después del render  
},  
[**_dependencias_**]);

Si el array de dependencias está vacío ([ ]), se ejecuta una sola vez cuando el componente se monta (similar a componentDidMount en clases).  
Si incluye variables, se ejecuta cada vez que alguna cambie.

## 🚀 async/await dentro de useEffect
El hook `useEffect` no puede declararse como `async` directamente porque espera que se le devuelva ``undefined`` o una función de limpieza, no una promesa (``Promise``).
Por eso, la solución estándar es definir una función ``async`` dentro del ``useEffect`` y ejecutarla ahí mismo.  

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch("https://api.ejemplo.com/datos");
          const data = await res.json();
          // procesar data
        } catch (error) {
          console.error("Error al obtener los datos:", error);
        }
      };
      fetchData();
    }, []);
---
### 🧠 ¿Por qué no se puede hacer useEffect(async () => { ... })?
Porque async hace que la función retorne una promesa, y React espera que useEffect devuelva:
- undefined, o
- una función de limpieza (para ejecutar al desmontar el componente)  

Por lo tanto, useEffect(async () => { ... }) no es válido y puede generar advertencias.

### 📚 ¿Para qué usar async/await dentro de useEffect?
Usualmente para llamadas asincrónicas que deben ocurrir cuando el componente:
- Se monta ([])
- O cambia una dependencia ([id], [usuario], etc.)

Ejemplos comunes:
- ✅ Llamadas a APIs REST (GET/POST)
- ✅ WebSockets o eventos del navegador
- ✅ Lectura desde bases locales o archivos
- ✅ Manejo de autenticación (tokens, verificación de sesión)
- ✅ Consulta de valores dinámicos (clima, cotización, geolocalización, etc.)