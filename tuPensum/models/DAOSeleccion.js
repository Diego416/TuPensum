var pool = require('./conexion');

exports.ingresarSeleccion=function(DTOSeleccion, callback){
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }
        var query = "INSERT INTO `seleccion` (`Usuario_idUsuario`, `Carrera_idCarrera`, `semestre`) VALUES ('"+ DTOSeleccion.usuario +"', '"+ DTOSeleccion.carrera +"', '"+ DTOSeleccion.semestre +"')";
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

exports.obtenerCarrera=function(usuario, callback){
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }
        var query = "SELECT * FROM `seleccion` WHERE `Usuario_idUsuario` = '"+ usuario +"'";
        connection.query(query,function(err,rows){
            connection.release();
            if(!err) {
                console.log("obtenerCarrera")
                callback(null, rows);
            }
        });
        connection.on('error', function(err) {
            throw err;
            return;     
        });
    });
}