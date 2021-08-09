# PROYECTO API Curso Backend Web

## SPRINT 02
___

#### DESCRIPCION

La idea es desarrollar una API para un negocio llamado Deli que comercializara comida a traves de esta aplicacion web.

Para este 2do sprint la idea es persistir la informacion en una base de datos *(PostgreSQL en este caos)*, sumar una capa de cache para los endpoints del catalogo de productos, autenticacion con JWT y una rutina de test para el registro de usuarios.
___

#### ESTRUCTURA DEL PROYECTO

```
/
├── config/             # configuracion de la base de datos dev-test-prod
├── controllers/        # como se manejara cada peticion
├── docs/               # documentacion de OPEN API - SWAGGER
├── middlewares/        # para autenticacion y validacion al registrarse
├── migrations/         # para crear la tablas de la BD
├── models/             # modelamos los objetos para interactuar con la BD
├── routes/             # definimos los path, middlewares y handlers 
├── seeders/            # para insertar registros mock a la BD
├── tests/              # rutina de test unitario para signup
└── server.js                       
```
___

#### INSTRUCCIONES DE INSTALACION
0.  Se asume que ya tiene instalado **PostgreSQL Server** y **Redis**
1.  Clone este repositorio en un directorio local
2.  Instale las dependencias del package.json ejecutando `npm install`
3.  Defina las variables de entorno que tomara `config.js` para conectar con la BD
4.  Corra los migrations y seeders ejecutando
    1.  `npx sequelize-cli db:migrate`
    2.  `npx sequelize-cli db:seed --seed users`
    3.  `npx sequelize-cli db:seed --seed addresses`
    4.  `npx sequelize-cli db:seed --seed payMethods`
    5.  `npx sequelize-cli db:seed --seed products`
    6.  `npx sequelize-cli db:seed --seed carts`
    7.  `npx sequelize-cli db:seed --seed cartItems`
5.  Inicie el servidor ejecutando `npm run dev` (usamos **nodemon**)
6.  Dirijase en su navegador a la ruta de la documentacion  [http://localhost:8000/api-docs](http://localhost:8000/api-docs)
7.  Pruebe los endpoints