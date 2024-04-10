# desafio-walmart

El desafío consiste en realizar un carrito de compra. Dado los productos y sus descuentos, el carrito debe ser capaz de calcular la mejor oportunidad de compra (e.g. 'incluye X más en la marca Y para un descuento de Z').

Para correr este proyecto solo es necesario tener Docker y Docker-Compose.

## Primera ejecución

Existe un Makefile en la raíz del proyecto, usando el comando `make provision-up` se correrá subirán todos los contenedores necesarios, así como la carga inicial ded la base de datos. En algunos sistemas es necesario utilizar `npm install` en el frontend para asegurar su correcta inicialización.

## Ejecuciones posteriores

Ya habiendo provisionado la base de datos, basta usar el comando `make start`.

## Acceder al sitio

La WEB está construida en React y queda habilitada en `localhost:3001`.
La API está en Golang y queda habilitada en la url `localhost:8081`

## Otras utilidades

El comando `make down` da de baja los contenedores asociados al proyecto. El comando `make provison` puede usarse para cargar los datos nuevamente (nota: dado que la bd es Mongo, solo los vuelve agregar quendando datos repetidos). Por último, el comando `make build` construye todos los contenedores.

# Decisiones y Trade offs

## Tecnologías

### Backend

Para el backend, elegí utilizar Golang, debido a que las necesidades del desafío decidí enforcarlas más al frontend, un backend más ligero hace sentido para no invertir más tiempo en él.

Debido a esto, se pierden muchas oportunidades de escalabilidad que podrían ofrecer algunos frameworks (e.g. Django, Rails o Spring Boot). Esos frameworks suelen tener decisiones tomadas por sus creadores que impactan en cómo se realiza el desarrollo, como la conexión a la base de dato y sus posteriores consultas. Al no tener esas herramientas out-of-the-box, debo confeccionarlas yo mismo. Sin embargo, esto también da la posibilidad de utilizar solo lo estrictamente necesario para el proyecto, así como abrir la puerta a código que, dentro de un framework, pueda resultar engorroso de implementar. Si por ejemplo quisiera realizar un ranking de las marcas/productos/descuentos más comprados, utilzando ORM puede resultar complejo de orquestar, teniendo que utilizar SQL de manera directa en el mejor de los casos.

Otra decisión fue el implementar el código bajo `Clean Architecture`. Utilizarlo fue méramete desafío personal, debido a que la base de es tan pequeña que no se justifica la separación de capas, que solo agregan complejidad a la lectura del código. Adicionalmente, la implementación es netamente personal, dado que cada desarrollador puede implementar CA como desee, agregando o quitando capas del código. No obstante, esto también tiene la ventaja de que los casos de usos y sus dominios quedan totalmente aislados, puediendo entonces ganar un mejor entendimiento de la aplicación leyendo solamente sus casos de usos.

Desde el punto de vista de patrones de desarrollo, utilizar CA hace que la inyección de dependencias y el patrón `Builder` sean mandatorios. Todo el código en el dominio se maneja a través de interfases, evitando implementar código. El patrón builder no se ve tan claramente dadas las condiciones del desafio, sin embargo, el archivo principal (main.go) puede tener la capacidad de elegir, por ejemplo, el motor de base de datos según variables de entorno, siendo completamente transparente a la ejecución del código.

Por último, decidí utilizar MongoDB debido a lo rápido que es su utilización y almacenamiento de datos no estructurados. Actualmente las promociones y descuentos tienen una estructura sencilla; si quisiera complejizarla solo basta con agregar más propiedades en la inserción. Esto no quita que proyectos productivos puedan utilizar más de un motor de bd. El código implementado solo soporta un cliente de base de datos, pero su extensión para agregar uno nuevo sería sencillo.

### Frontend

Para el frontend decidí utilizar React. Similar al backend, también fue implementado con `Clean Architecture`, bajo suposiciones similares. Sin embargo, el traspaso de dependencias podría no ser el adecuado, dada la naturaleza no tipeada de javascript, por lo que decidí también utilizar typescript para definir los comportamientos esperados de los controladores y repositorios. De esa manera, queda claro que el componente `ShoppingCart` requiere de un `ShoppingCartController` y no alguna instancia similar.

Una de las diferencias de implementación de CA es que no existen `entrypoints`, debido a que la aplicación se accede de una sola manera: a través de la web.

La web en sí es bastante sencilla: un listado de productos y un carrito. Una de mis debilidades es el diseño conceptual, por lo que hice algo muy minimalista para la implementación.

## Generales

El desafío está fuertemente basado el frontend, teniendo sus ventajas y desventajas: por un lado, deja que el backend solo se encargue de servir datos útiles a los posibles clientes, al mismo tiempo que el frontend se encarga de lógica del negocio, pero, por otro lado, el backend ahora no tiene acceso al estado real de los clientes, no sabe del carrito ni puede entregarlo si el usuario (suponiendo que haya más funcionalidades) incia sesión en otro equipo.

Para implementar lo anterior, el backend debería haberse hecho cargo también de algunas tareas e incluso repetirlas, como por ejemplo, el cálculo final de la compra. Esas tareas no pueden quedar del lado del cliente dada la facilidad con la que se pueden editar los datos.

Otra característica que hubiese sido interesante explorar es utilizar caché para acelerar la carga de los productos y sus descuentos. Esto se podría haber realziado a través de Redis, así como utilizando otras herramientas middleware (como Ngnix) si es que no es posible implementarlas directamente en el código. Tal decisión se debe basar en más datos que solo el deseo de realizar más código.
