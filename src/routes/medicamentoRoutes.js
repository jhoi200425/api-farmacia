const express = require('express');
const router = express.Router();
const medicamentoController = require('../controllers/medicamentoController');

router.get('/getMedicamentos', medicamentoController.getMedicamentos);
router.get('/getMedicamentoById/:id', medicamentoController.getMedicamentoById);
router.post('/postMedicamento', medicamentoController.postMedicamento);
router.put('/putMedicamento/:id', medicamentoController.putMedicamento);
router.delete('/deleteMedicamento/:id', medicamentoController.deleteMedicamento);

module.exports = router;