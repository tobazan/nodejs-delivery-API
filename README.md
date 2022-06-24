# PROYECTO API Curso Backend Web

## SPRINT 04
___

### DESCRIPCION

Luego de haberla desplegado en la nube de AWS en el sprint anterior, ahora el objetivo es **containarizar** la API para simplificar futuros deploy

> **Docker Compose** es una herramienta que permite simplificar el uso de Docker. A partir de archivos YAML es mas sencillo crear contendores, conectarlos, habilitar puertos, volumenes, etc

> Permite mediante archivos YAML para poder instruir al Docker Engine a realizar tareas, programaticamente. Y esta es la clave, la facilidad para dar una serie de instrucciones, y luego repetirlas en diferentes ambientes.

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
