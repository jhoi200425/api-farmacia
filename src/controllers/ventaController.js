const ventaModel = require('../models/ventaModel')

module.exports = {

    getVentas: (req, res)=>{
        ventaModel.getVentas((err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            res.status(200).json({data: result});
        });
    },

    getVentaById: (req, res)=>{
        const {id} = req.params;
        ventaModel.getVentaById(id, (err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            if(result.length === 0){
                res.status(404).json({message: 'Venta no encontrada'});
                return;
            }
            res.status(200).json({data: result});
        });
    },

    postVenta: (req, res)=>{
        const {fecha, cliente_id} = req.body;
        if(!fecha || !cliente_id){
            res.status(400).json({message: 'Faltan datos obligatorios'});
            return;
        }
        ventaModel.postVenta(fecha, cliente_id, (err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            res.status(201).json({message: 'Venta creada correctamente', data: {idInsertado: result}});
        })
    },

    putVenta: (req, res)=>{
        const {id} = req.params;
        const {fecha, cliente_id} = req.body;
        if(!fecha || !cliente_id){
            res.status(400).json({message: 'Faltan datos obligatorios'});
            return;
        }
        ventaModel.putVenta(id, fecha, cliente_id, (err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            if(result.affectedRows === 0){
                res.status(404).json({message: 'Venta no encontrada'});
                return;
            }
            res.status(200).json({message: 'Venta actualizada correctamente'});
        })
    },

    deleteVenta: (req, res)=>{
        const {id} = req.params;
        ventaModel.deleteVenta(id, (err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            if(result.affectedRows === 0){
                res.status(404).json({message: 'Venta no encontrada'});
                return;
            }
            res.status(200).json({message: 'Venta eliminada correctamente'});
        })
    }
}