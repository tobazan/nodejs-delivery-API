# PROYECTO API Curso Backend Web

## SPRINT 03
___

#### DESCRIPCION

En este sprint con nuestra API ya funcionando en local, la idea sera desplegarla en infraestructura cloud de AWS.

En una misma **VPC** tendremos 2 subnets *publicas* para el **Grupo de Autoescalado** que servira nuestra API y una 3ra subnet *privada* donde tendremos nuestra BD en **RDS**. 

La capa de cache para los endpoints de productos estara en **Elastic Cache**

El grupo de autoescalado tendra en frente un balanceador de carga tipo **ALB** que recibira y distribuira las peticiones realizadas a nuestro dominio en **Route 53**

A su vez, en **CloudFront** serviremos la documentacion Swagger como cliente estatico
___

#### MAPA DE LA ARQUITECTURA DESPLEGADA

![mapa_arq] (arquitectura_sp03_bazan.JPG)

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
