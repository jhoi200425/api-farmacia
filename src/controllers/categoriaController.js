const categoriaModel = require('../models/categoriaModel')

module.exports = {

    getCategorias: (req, res)=>{
        categoriaModel.getCategorias((err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            res.status(200).json({data: result});
        });
    },

    getCategoriaById: (req, res)=>{
        const {id} = req.params;
        categoriaModel.getCategoriaById(id, (err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            if(result.length === 0){
                res.status(404).json({message: 'Categoria no encontrada'});
                return;
            }
            res.status(200).json({data: result});
        });
    },

    postCategoria: (req, res)=>{
        const {nombre, descripcion} = req.body;
        if(!nombre){
            res.status(400).json({message: 'Faltan datos obligatorios'});
            return;
        }
        categoriaModel.postCategoria(nombre, descripcion, (err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            res.status(201).json({message: 'Categoria creada correctamente', data: {idInsertado: result}});
        })
    },

    putCategoria: (req, res)=>{
        const {id} = req.params;
        const {nombre, descripcion} = req.body;
        if(!nombre){
            res.status(400).json({message: 'Faltan datos obligatorios'});
            return;
        }
        categoriaModel.putCategoria(id, nombre, descripcion, (err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            if(result.affectedRows === 0){
                res.status(404).json({message: 'Categoria no encontrada'});
                return;
            }
            res.status(200).json({message: 'Categoria actualizada correctamente'});
        })
    },

    deleteCategoria: (req, res)=>{
        const {id} = req.params;
        categoriaModel.deleteCategoria(id, (err, result)=>{
            if(err){
                res.status(500).json({error: err.message});
                return;
            }
            if(result.affectedRows === 0){
                res.status(404).json({message: 'Categoria no encontrada'});
                return;
            }
            res.status(200).json({message: 'Categoria eliminada correctamente'});
        })
    }
}