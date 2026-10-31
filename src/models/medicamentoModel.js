const db = require('../config/dbConfig')
// se llama a la configuracion de la bd

class medicamento{

    getMedicamentos(callback){
        const sql = "select id, codigo, nombre, precio, stock, categoria_id, proveedor_id from medicamento";
        db.query(sql,callback);
    }

    getMedicamentoById(id,callback){
        const sql = "select id, codigo, nombre, precio, stock, categoria_id, proveedor_id from medicamento where id = ?";
        db.query(sql,[id],callback);
    }

    postMedicamento(codigo, nombre, precio, stock, categoria_id, proveedor_id, callback){
        const sql = 'insert into medicamento(codigo, nombre, precio, stock, categoria_id, proveedor_id) values (?, ?, ?, ?, ?, ?)';
        db.query(sql, [codigo, nombre, precio, stock, categoria_id, proveedor_id], (err, result)=>{
            if(err){
                return callback(err, null);
            }
            callback(null, result.insertId);
        });
    }

    putMedicamento(id, codigo, nombre, precio, stock, categoria_id, proveedor_id, callback){
        const sql = 'update medicamento set codigo = ?, nombre = ?, precio = ?, stock = ?, categoria_id = ?, proveedor_id = ? where id = ?';
        db.query(sql, [codigo, nombre, precio, stock, categoria_id, proveedor_id, id], callback);
    }

    deleteMedicamento(id, callback){
        const sql = 'delete from medicamento where id = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = new medicamento();