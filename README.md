# desafio-walmart

Para correr este proyecto solo es necesario tener Docker y Docker-Compose.

## Primera ejecución

Existe un Makefile en la raíz del proyecto, usando el comando `make provision-up` se correrá subirán todos los contenedores necesarios, así como la carga inicial ded la base de datos

## Ejecuciones posteriores

Ya habiendo provisionado la base de datos, basta usar el comando `make start`.

## Acceder al sitio

La WEB está construida en React y queda habilitada en `localhost:3001`.
La API está en Golang y queda habilitada en la url `localhost:8081`

## Otras utilidades

El comando `make down` da de baja los contenedores asociados al proyecto. El comando `make provison` puede usarse para cargar los datos nuevamente (nota: dado que la bd es Mongo, solo los vuelve agregar quendando datos repetidos). Por último, el comando `make build` construye todos los contenedores.
