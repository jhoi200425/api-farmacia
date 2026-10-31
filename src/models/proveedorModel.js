const db = require('../config/dbConfig')

class proveedor{

    getProveedores(callback){
        const sql = "select id, nombre, nit, telefono, correo from proveedor";
        db.query(sql,callback);
    }

    getProveedorById(id,callback){
        const sql = "select id, nombre, nit, telefono, correo from proveedor where id = ?";
        db.query(sql,[id],callback);
    }

    postProveedor(nombre, nit, telefono, correo, callback){
        const sql = 'insert into proveedor(nombre, nit, telefono, correo) values (?, ?, ?, ?)';
        db.query(sql, [nombre, nit, telefono, correo], (err, result)=>{
            if(err){
                return callback(err, null);
            }
            callback(null, result.insertId);
        });
    }

    putProveedor(id, nombre, nit, telefono, correo, callback){
        const sql = 'update proveedor set nombre = ?, nit = ?, telefono = ?, correo = ? where id = ?';
        db.query(sql, [nombre, nit, telefono, correo, id], callback);
    }

    deleteProveedor(id, callback){
        const sql = 'delete from proveedor where id = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = new proveedor();