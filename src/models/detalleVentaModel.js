const db = require('../config/dbConfig')

class detalleVenta{

    getDetalleVentas(callback){
        const sql = "select id, venta_id, medicamento_id, cantidad, precio_unitario from detalle_venta";
        db.query(sql,callback);
    }

    getDetalleVentaById(id,callback){
        const sql = "select id, venta_id, medicamento_id, cantidad, precio_unitario from detalle_venta where id = ?";
        db.query(sql,[id],callback);
    }

    postDetalleVenta(venta_id, medicamento_id, cantidad, precio_unitario, callback){
        const sql = 'insert into detalle_venta(venta_id, medicamento_id, cantidad, precio_unitario) values (?, ?, ?, ?)';
        db.query(sql, [venta_id, medicamento_id, cantidad, precio_unitario], (err, result)=>{
            if(err){
                return callback(err, null);
            }
            callback(null, result.insertId);
        });
    }

    putDetalleVenta(id, venta_id, medicamento_id, cantidad, precio_unitario, callback){
        const sql = 'update detalle_venta set venta_id = ?, medicamento_id = ?, cantidad = ?, precio_unitario = ? where id = ?';
        db.query(sql, [venta_id, medicamento_id, cantidad, precio_unitario, id], callback);
    }

    deleteDetalleVenta(id, callback){
        const sql = 'delete from detalle_venta where id = ?';
        db.query(sql, [id], callback);
    }
}

module.exports = new detalleVenta();