const express = require('express');
const bodyParser = require('body-parser');
const medicamentoRoutes = require('./src/routes/medicamentoRoutes');
const categoriaRoutes = require('./src/routes/categoriaRoutes');
const proveedorRoutes = require('./src/routes/proveedorRoutes');
const clienteRoutes = require('./src/routes/clienteRoutes');
const ventaRoutes = require('./src/routes/ventaRoutes');
const detalleVentaRoutes = require('./src/routes/detalleVentaRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api/medicamentos', medicamentoRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/proveedores', proveedorRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/ventas', ventaRoutes);
app.use('/api/detalleventas', detalleVentaRoutes);

app.listen(port, () => {
    console.log('Servidor corriendo en el puerto ' + port);
});