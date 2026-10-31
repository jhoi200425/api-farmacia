const proveedorModel = require('../models/proveedorModel')

module.exports = {

    getProveedores: (req, res)=>{
        proveedorModel.getProveedores((err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            res.status(200).json({data: result});
        });
    },

    getProveedorById: (req, res)=>{
        const {id} = req.params;
        proveedorModel.getProveedorById(id, (err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            if(result.length === 0){
                res.status(404).json({message: 'Proveedor no encontrado'});
                return;
            }
            res.status(200).json({data: result});
        });
    },

    postProveedor: (req, res)=>{
        const {nombre, nit, telefono, correo} = req.body;
        if(!nombre || !nit){
            res.status(400).json({message: 'Faltan datos obligatorios'});
            return;
        }
        proveedorModel.postProveedor(nombre, nit, telefono, correo, (err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            res.status(201).json({message: 'Proveedor creado correctamente', data: {idInsertado: result}});
        })
    },

    putProveedor: (req, res)=>{
        const {id} = req.params;
        const {nombre, nit, telefono, correo} = req.body;
        if(!nombre || !nit){
            res.status(400).json({message: 'Faltan datos obligatorios'});
            return;
        }
        proveedorModel.putProveedor(id, nombre, nit, telefono, correo, (err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            if(result.affectedRows === 0){
                res.status(404).json({message: 'Proveedor no encontrado'});
                return;
            }
            res.status(200).json({message: 'Proveedor actualizado correctamente'});
        })
    },

    deleteProveedor: (req, res)=>{
        const {id} = req.params;
        proveedorModel.deleteProveedor(id, (err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            if(result.affectedRows === 0){
                res.status(404).json({message: 'Proveedor no encontrado'});
                return;
            }
            res.status(200).json({message: 'Proveedor eliminado correctamente'});
        })
    }
}