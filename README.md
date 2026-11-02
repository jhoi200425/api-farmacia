# API REST Farmacia

API REST desarrollada con Node.js y Express, conectada a una base de datos MySQL en Clever Cloud. Taller Integrador: BD + API REST + WordPress.

Autor: JHOICER OSPINO GARCIA

## URL pública
https://api-farmacia-1.onrender.com

# repositorio
https://github.com/jhoi200425/api-farmacia

Nota: está en un plan gratuito; la primera petición después de un tiempo sin uso puede tardar hasta 50 segundos.

## Tecnologías
- Node.js
- Express
- MySQL (paquete mysql)
- body-parser

## Cómo correrla
1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Crear un archivo `.env` en la raíz con estas variables:

```
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=3306
```

4. Ejecutar: `node --env-file=.env index.js`

La API corre en http://localhost:3000

## Estructura
- index.js
- src/config/dbConfig.js
- src/models
- src/controllers
- src/routes

## Endpoints
Todas las respuestas son JSON. En los endpoints con `:id`, reemplazar por el número del registro.

### Medicamentos (/api/medicamentos)
| Método | Ruta | Descripción |
|---|---|---|
| GET | /getMedicamentos | Lista todos |
| GET | /getMedicamentoById/:id | Consulta uno |
| POST | /postMedicamento | Crea |
| PUT | /putMedicamento/:id | Actualiza |
| DELETE | /deleteMedicamento/:id | Elimina |

Body (POST y PUT): codigo, nombre, precio, stock, categoria_id, proveedor_id

### Categorías (/api/categorias)
| Método | Ruta | Descripción |
|---|---|---|
| GET | /getCategorias | Lista todas |
| GET | /getCategoriaById/:id | Consulta una |
| POST | /postCategoria | Crea |
| PUT | /putCategoria/:id | Actualiza |
| DELETE | /deleteCategoria/:id | Elimina |

Body (POST y PUT): nombre, descripcion

### Proveedores (/api/proveedores)
| Método | Ruta | Descripción |
|---|---|---|
| GET | /getProveedores | Lista todos |
| GET | /getProveedorById/:id | Consulta uno |
| POST | /postProveedor | Crea |
| PUT | /putProveedor/:id | Actualiza |
| DELETE | /deleteProveedor/:id | Elimina |

Body (POST y PUT): nombre, nit, telefono, correo

### Clientes (/api/clientes)
| Método | Ruta | Descripción |
|---|---|---|
| GET | /getClientes | Lista todos |
| GET | /getClienteById/:id | Consulta uno |
| POST | /postCliente | Crea |
| PUT | /putCliente/:id | Actualiza |
| DELETE | /deleteCliente/:id | Elimina |

Body (POST y PUT): cedula, nombre, apellido, celular, correo

### Ventas (/api/ventas)
| Método | Ruta | Descripción |
|---|---|---|
| GET | /getVentas | Lista todas |
| GET | /getVentaById/:id | Consulta una |
| POST | /postVenta | Crea |
| PUT | /putVenta/:id | Actualiza |
| DELETE | /deleteVenta/:id | Elimina |

Body (POST y PUT): fecha (AAAA-MM-DD), cliente_id

### Detalle de venta (/api/detalleventas)
| Método | Ruta | Descripción |
|---|---|---|
| GET | /getDetalleVentas | Lista todos |
| GET | /getDetalleVentaById/:id | Consulta uno |
| POST | /postDetalleVenta | Crea |
| PUT | /putDetalleVenta/:id | Actualiza |
| DELETE | /deleteDetalleVenta/:id | Elimina |

Body (POST y PUT): venta_id, medicamento_id, cantidad, precio_unitario

## Códigos de respuesta
- 200: operación exitosa
- 201: registro creado
- 400: datos faltantes o inválidos
- 404: registro no encontrado
- 409: dato duplicado o registro con relaciones asociadas (en medicamentos)
- 500: error del servidor

## Ejemplo
GET https://api-farmacia-1.onrender.com/api/medicamentos/getMedicamentos