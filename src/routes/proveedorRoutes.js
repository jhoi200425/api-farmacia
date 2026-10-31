const express = require('express')
const router = express.Router();

const proveedorController = require('../controllers/proveedorController');

router.get('/getProveedores', proveedorController.getProveedores)
router.get('/getProveedorById/:id', proveedorController.getProveedorById)
router.post('/postProveedor', proveedorController.postProveedor)
router.put('/putProveedor/:id', proveedorController.putProveedor)
router.delete('/deleteProveedor/:id', proveedorController.deleteProveedor)

module.exports = router;