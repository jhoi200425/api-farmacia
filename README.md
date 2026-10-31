# API REST Farmacia

API REST desarrollada con Node.js y Express, conectada a una base de datos MySQL en Clever Cloud. Taller Integrador: BD + API REST + WordPress.

Autor: [tu nombre completo]

## Tecnologías
- Node.js
- Express
- MySQL (paquete mysql)
- body-parser

## Instalación
1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Crear un archivo `.env` en la raíz con estas variables:

DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=3306

4. Ejecutar: `node --env-file=.env index.js`

La API corre en http://localhost:3000

## Estructura
- index.js
- src/config/dbConfig.js
- src/models
- src/controllers
- src/routes

## Rutas
Cada tabla tiene 5 rutas: getX, getXById/:id, postX, putX/:id y deleteX/:id.

| Tabla | Ruta base |
|---|---|
| medicamento | /api/medicamentos |
| categoria | /api/categorias |
| proveedor | /api/proveedores |
| cliente | /api/clientes |
| venta | /api/ventas |
| detalle_venta | /api/detalleventas |

Ejemplo: GET /api/medicamentos/getMedicamentos

## URL pública
[se agrega después del despliegue]