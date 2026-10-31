const db = require('../config/dbConfig')

class cliente{

    getClientes(callback){
        const sql = "select id, cedula, nombre, apellido, celular, correo from cliente";
        db.query(sql,callback);
    }

    getClienteById(id,callback){
        const sql = "select id, cedula, nombre, apellido, celular, correo from cliente where id = ?";
        db.query(sql,[id],callback);
    }

    postCliente(cedula, nombre, apellido, celular, correo, callback){
        const sql = 'insert into cliente(cedula, nombre, apellido, celular, correo) values (?, ?, ?, ?, ?)';
        db.query(sql, [cedula, nombre, apellido, celular, correo], (err, result)=>{
            if(err){
                return callback(err, null);
            }
            callback(null, result.insertId);
        });
    }

    putCliente(id, cedula, nombre, apellido, celular, correo, callback){
        const sql = 'update cliente set cedula = ?, nombre = ?, apellido = ?, celular = ?, correo = ? where id = ?';
        db.query(sql, [cedula, nombre, apellido, celular, correo, id], callback);
    }

    deleteCliente(id, callback){
        const sql = 'delete from cliente where id = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = new cliente();