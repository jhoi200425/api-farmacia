const detalleVentaModel = require('../models/detalleVentaModel')

module.exports = {

    getDetalleVentas: (req, res)=>{
        detalleVentaModel.getDetalleVentas((err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            res.status(200).json({data: result});
        });
    },

    getDetalleVentaById: (req, res)=>{
        const {id} = req.params;
        detalleVentaModel.getDetalleVentaById(id, (err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            if(result.length === 0){
                res.status(404).json({message: 'Detalle de venta no encontrado'});
                return;
            }
            res.status(200).json({data: result});
        });
    },

    postDetalleVenta: (req, res)=>{
        const {venta_id, medicamento_id, cantidad, precio_unitario} = req.body;
        if(!venta_id || !medicamento_id || !cantidad || !precio_unitario){
            res.status(400).json({message: 'Faltan datos obligatorios'});
            return;
        }
        detalleVentaModel.postDetalleVenta(venta_id, medicamento_id, cantidad, precio_unitario, (err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            res.status(201).json({message: 'Detalle de venta creado correctamente', data: {idInsertado: result}});
        })
    },

    putDetalleVenta: (req, res)=>{
        const {id} = req.params;
        const {venta_id, medicamento_id, cantidad, precio_unitario} = req.body;
        if(!venta_id || !medicamento_id || !cantidad || !precio_unitario){
            res.status(400).json({message: 'Faltan datos obligatorios'});
            return;
        }
        detalleVentaModel.putDetalleVenta(id, venta_id, medicamento_id, cantidad, precio_unitario, (err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            if(result.affectedRows === 0){
                res.status(404).json({message: 'Detalle de venta no encontrado'});
                return;
            }
            res.status(200).json({message: 'Detalle de venta actualizado correctamente'});
        })
    },

    deleteDetalleVenta: (req, res)=>{
        const {id} = req.params;
        detalleVentaModel.deleteDetalleVenta(id, (err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            if(result.affectedRows === 0){
                res.status(404).json({message: 'Detalle de venta no encontrado'});
                return;
            }
            res.status(200).json({message: 'Detalle de venta eliminado correctamente'});
        })
    }
}