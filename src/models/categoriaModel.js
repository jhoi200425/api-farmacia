const db = require('../config/dbConfig')

class categoria{

    getCategorias(callback){
        const sql = "select id, nombre, descripcion from categoria";
        db.query(sql,callback);
    }

    getCategoriaById(id,callback){
        const sql = "select id, nombre, descripcion from categoria where id = ?";
        db.query(sql,[id],callback);
    }

    postCategoria(nombre, descripcion, callback){
        const sql = 'insert into categoria(nombre, descripcion) values (?, ?)';
        db.query(sql, [nombre, descripcion], (err, result)=>{
            if(err){
                return callback(err, null);
            }
            callback(null, result.insertId);
        });
    }

    putCategoria(id, nombre, descripcion, callback){
        const sql = 'update categoria set nombre = ?, descripcion = ? where id = ?';
        db.query(sql, [nombre, descripcion, id], callback);
    }

    deleteCategoria(id, callback){
        const sql = 'delete from categoria where id = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = new categoria();