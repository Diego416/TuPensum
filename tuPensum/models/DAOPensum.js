var pool = require('./conexion');

exports.obtener=function(carrera, callback){
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }
        var query = "SELECT * FROM `pensum` inner join `materia` on `pensum`.`Materia_idMateria` = `idMateria` WHERE `Carrera_idCarrera` = '" + carrera + "'";
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