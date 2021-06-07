# PROYECTO API Curso Backend Web

## SPRINT 01
___
#### DESCRIPCION

La idea es desarrollar una API para un negocio llamado Deli que comercializara comida a traves de esta aplicacion web.

Para este 1er sprint, se puede hacer uso de las librerias
- **EXPRESS:** para crear el servidor (se hizo uso de la autenticacion basica, el router y middlewares)
- **SWAGGER / OPEN API:** para documentar 

Por el momento no haremos uso de BD por lo que la *persistencia* la tenemos a traves de JSON files, los registros de cada coleccion se crearon con ayuda de **mockaroo**
___
#### ESTRUCTURA DEL PROYECTO

```
src
├── controllers         # como se manejara cada peticion
├── docs/               # documentacion de OPEN API para cada conjunto de endpoints
├── middlewares/        # cree algunos para autenticacion y validacion al registrarse
├── mocks/              # archivos JSON, reemplazan lo que a futuro sera una BD NoSQL
├── routes/             # capa de red
└── index.js            
```
___
#### INSTRUCCIONES DE INSTALACION
1.  Clone este repositorio en un directorio local
2.  Instale las dependencias del package.json ejecutando `npm install`
3.  Inicie el servidor ejecutando `npm run dev` (usamos **nodemon**)
4.  Dirijase en su navegador a la ruta de la documentacion  [http://localhost:8000/api-docs](http://localhost:8000/api-docs)
5.  Pruebe los endpoints valiendose de las credenciales de usuarios en el archivo users_mock.json