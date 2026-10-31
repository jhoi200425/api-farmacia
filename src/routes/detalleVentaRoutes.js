const express = require('express')
const router = express.Router();

const detalleVentaController = require('../controllers/detalleVentaController');

router.get('/getDetalleVentas', detalleVentaController.getDetalleVentas)
router.get('/getDetalleVentaById/:id', detalleVentaController.getDetalleVentaById)
router.post('/postDetalleVenta', detalleVentaController.postDetalleVenta)
router.put('/putDetalleVenta/:id', detalleVentaController.putDetalleVenta)
router.delete('/deleteDetalleVenta/:id', detalleVentaController.deleteDetalleVenta)

module.exports = router;