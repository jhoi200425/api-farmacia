const db = require('../config/dbConfig')

class venta{

    getVentas(callback){
        const sql = "select id, date_format(fecha, '%Y-%m-%d') as fecha, cliente_id from venta";
        db.query(sql,callback);
    }

    getVentaById(id,callback){
        const sql = "select id, date_format(fecha, '%Y-%m-%d') as fecha, cliente_id from venta where id = ?";
        db.query(sql,[id],callback);
    }

    postVenta(fecha, cliente_id, callback){
        const sql = 'insert into venta(fecha, cliente_id) values (?, ?)';
        db.query(sql, [fecha, cliente_id], (err, result)=>{
            if(err){
                return callback(err, null);
            }
            callback(null, result.insertId);
        });
    }

    putVenta(id, fecha, cliente_id, callback){
        const sql = 'update venta set fecha = ?, cliente_id = ? where id = ?';
        db.query(sql, [fecha, cliente_id, id], callback);
    }

    deleteVenta(id, callback){
        const sql = 'delete from venta where id = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = new venta();