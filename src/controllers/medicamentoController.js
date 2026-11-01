const medicamentoModel = require('../models/medicamentoModel')
// se realiza llamado al modelo

module.exports = {

    getMedicamentos: (req, res)=>{
        medicamentoModel.getMedicamentos((err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            res.status(200).json({data: result});
        });
    },

    getMedicamentoById: (req, res)=>{
        const {id} = req.params;
        medicamentoModel.getMedicamentoById(id, (err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            if(result.length === 0){
                res.status(404).json({message: 'Medicamento no encontrado'});
                return;
            }
            res.status(200).json({data: result});
        });
    },

    postMedicamento: (req, res)=>{
        const {codigo, nombre, precio, stock, categoria_id, proveedor_id} = req.body;
        if(!codigo || !nombre || !precio || stock === undefined || !categoria_id || !proveedor_id){
            res.status(400).json({message: 'Faltan datos obligatorios'});
            return;
        }
        if(isNaN(precio) || isNaN(stock) || precio < 0 || stock < 0){
            res.status(400).json({message: 'Precio y stock deben ser números válidos'});
            return;
        }
        medicamentoModel.postMedicamento(codigo, nombre, precio, stock, categoria_id, proveedor_id, (err, result)=>{
            if(err){
                if(err.code === 'ER_DUP_ENTRY'){
                    res.status(409).json({message: 'Ya existe un medicamento con ese código'});
                    return;
                }
                if(err.code === 'ER_NO_REFERENCED_ROW_2'){
                    res.status(400).json({message: 'La categoría o el proveedor no existe'});
                    return;
                }
                res.status(500).json({error: err.message});
                return;
            }
            res.status(201).json({message: 'Medicamento creado correctamente', data: {idInsertado: result}});
        })
    },

    putMedicamento: (req, res)=>{
        const {id} = req.params;
        const {codigo, nombre, precio, stock, categoria_id, proveedor_id} = req.body;
        if(!codigo || !nombre || !precio || stock === undefined || !categoria_id || !proveedor_id){
            res.status(400).json({message: 'Faltan datos obligatorios'});
            return;
        }
        if(isNaN(precio) || isNaN(stock) || precio < 0 || stock < 0){
            res.status(400).json({message: 'Precio y stock deben ser números válidos'});
            return;
        }
        medicamentoModel.putMedicamento(id, codigo, nombre, precio, stock, categoria_id, proveedor_id, (err, result)=>{
            if(err){
                if(err.code === 'ER_DUP_ENTRY'){
                    res.status(409).json({message: 'Ya existe un medicamento con ese código'});
                    return;
                }
                if(err.code === 'ER_NO_REFERENCED_ROW_2'){
                    res.status(400).json({message: 'La categoría o el proveedor no existe'});
                    return;
                }
                res.status(500).json({error: err.message});
                return;
            }
            if(result.affectedRows === 0){
                res.status(404).json({message: 'Medicamento no encontrado'});
                return;
            }
            res.status(200).json({message: 'Medicamento actualizado correctamente'});
        })
    },

    deleteMedicamento: (req, res)=>{
        const {id} = req.params;
        medicamentoModel.deleteMedicamento(id, (err, result)=>{
            if(err){
                if(err.code === 'ER_ROW_IS_REFERENCED_2'){
                    res.status(409).json({message: 'No se puede eliminar: el medicamento tiene ventas asociadas'});
                    return;
                }
                res.status(500).json({error: err.message});
                return;
            }
            if(result.affectedRows === 0){
                res.status(404).json({message: 'Medicamento no encontrado'});
                return;
            }
            res.status(200).json({message: 'Medicamento eliminado correctamente'});
        })
    }
}