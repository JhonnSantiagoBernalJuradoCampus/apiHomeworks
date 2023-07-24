# apiHomeworks
## Objetivo general del proyecto:
Desarrollar una API de tareas que permita a los usuarios gestionar y realizar un seguimiento de sus tareas. La API mostrará las tareas pendientes para los próximos 7 días, brindando a los usuarios una visión clara de sus responsabilidades a corto plazo.

## Objetivo específico del proyecto:
Implementar una funcionalidad en la API de tareas que permita filtrar y mostrar las tareas pendientes que deben completarse en los próximos 7 días. Esto ayudará a los usuarios a organizar y priorizar sus tareas de manera eficiente, proporcionándoles una vista rápida y relevante de sus actividades pendientes a corto plazo. El proyecto se basa en crear una api de tareas la cual va a permitir al usuario registrarse, crear tareas y cada tarea va a estar ligada a un tipo es decir: esta tarea es de matematica, o de ingles etc depende el programa, La idea es presentar al usuario las tareas que tenga pendientes en los proximos 7 dias, la base de datos contará con 4 tablas las cuales serán: user, tarea, tipo, estado
# Diagrama base de datos
![diagrama](./assets/diagrama.png)

## Teconologias utilizadas
<div>
    <img src="./assets/javaScript.png" alt="javaScript Logo" width="100">
    <img src="./assets/node.png" alt="node Logo" width="100">
    <img src="./assets/express.png" alt="express Logo" width="100">
    <img src="./assets/typeScript.png" alt="typeScript Logo" width="100">
    <img src="./assets/mySql.png" alt="MySQL Logo" width="100">
    <img src="./assets/nodemon.png" alt="nodemon Logo" width="100">
    <img src="./assets/npm.png" alt="npm Logo" width="100">
</div>

# Instalacion del proyecto
Deberas abrir la terminal de tu editor de codigo y ejecutar el comando `npm i`.
El cual instalara todas las dependencias utilizadas
# Dependencias instaladas
- express
- nodemon
- mysql2
- typescript
- reflect-metadata
- dotenv
- class-validator
- class-transformer
- validator
# Endpoints
1. Para acceder a los enpoints deberá ingresar a la ruta: `http://127.12.1.4:5510`
# User
## Get
1. Mostrar todos los user: `http://127.12.1.4:5510/user`
2. Mostrar un user en especifico: `http://127.12.1.4:5510/user/:id`
## Post
1. Agregar user: `http://127.12.1.4:5510/user/agregar`
2. Ejemplo de los datos a pasar en el post
```js
{
    "nombre": "Angela Esperanza Almeida Xd", 
    "email": "angelajurado@gmail.com", 
    "telefono": "3118124321", 
    "apodo": "Angie"
}
```
## Put
1. Editar un user: `http://127.12.1.4:5510/user/editar/:id`
2. Ejemplo de los datos a pasar en el put
```js
{
    "nombre": "Angela Esperanza Almeida Suarez", 
    "email": "angelajurado@gmail.com", 
    "telefono": "3118124321", 
    "apodo": "Angie"
}
```
## Delete
1. Eliminar user: `http://127.12.1.4:5510/user/eliminar/:id`
# Estado
## Get
1. Mostrar todos los estado: `http://127.12.1.4:5510/estado`
2. Mostrar un estado en especifico: `http://127.12.1.4:5510/estado/:id`
# Tipo
## Get
1. Mostrar todos los tipo: `http://127.12.1.4:5510/tipo`
2. Mostrar un tipo en especifico: `http://127.12.1.4:5510/tipo/:id`
## Post
1. Agregar tipo `http://127.12.1.4:5510/tipo/agregar`
2. Ejemplo de los datos a pasar en el post
```js
{
    "nombre": "Sociales", 
}
```
## Delete
1. Eliminar tipo: `http://127.12.1.4:5510/tipo/eliminar/:id`
# Tarea
## Get
1. Mostrar todas las tareas que tiene un user en especifico dentro de los proximos 7 dias: `http://127.12.1.4:5510/tarea/user/:id` 
2. Mostar todas las tarea: `http://127.12.1.4:5510/tarea`
3. Mostrar una tarea en especifico: `http://127.12.1.4:5510/tarea/:id`
## Post
1. Agregar una tarea: `http://127.12.1.4:5510/tarea/agregar`
2. Ejemplo de los datos a pasar en el post
```js
{
    "tarea_titulo": "Fullstack",
    "tarea_descripcion": "Realizar un proyecto con node y vue",
    "tarea_fecha": "2023-07-29",
    "tarea_recordatorio": "2023-07-28",
    "id_user": 2,
    "id_tipo": 3
}
```
## Put
1. Editar una tarea: `http://127.12.1.4:5510/tarea/editar/:id`
2. Ejemplo de los datos a pasar en el put:
```js
{
    "tarea_titulo": "Fullstack",
    "tarea_descripcion": "Realizar un proyecto con node y react",
    "tarea_fecha": "2023-07-29",
    "tarea_recordatorio": "2023-07-28",
    "id_user": 2,
    "id_tipo": 3
}
```
## Delete
1. Eliminar una tarea: `http://127.12.1.4:5510/tarea/eliminar/:id`