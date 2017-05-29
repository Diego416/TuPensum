var pool = require('./conexion');

exports.listarTodas=function(callback){
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }
        var query = "Select * From `materia` inner join `universidad` on `materia`.`Universidad_idUniversidad` = `idUniversidad`";
        connection.query(query,function(err,rows){
            connection.release();
            if(!err) {
                callback(null, rows);
            }
        });
        connection.on('error', function(err) {
            throw err;
            return;     
        });
    });
}

exports.detalleMateria=function(id, callback){
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }
        var query = "Select * From `materia` inner join `universidad` on `materia`.`Universidad_idUniversidad` = `idUniversidad` where `idMateria`="+id;
        connection.query(query,function(err,rows){
            connection.release();
            if(!err) {
                callback(null, rows);
            }
        });
        connection.on('error', function(err) {
            throw err;
            return;     
        });
    });
}