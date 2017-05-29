var pool = require('./conexion');

exports.listarTodas=function(callback){
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }
        var query = "Select * From `opinion` inner join `usuario` on `opinion`.`Usuario_idUsuario` = `cedulaUsuario` inner join `materia` on `opinion`.`Materia_id Materia` = `idMateria` inner join `universidad` on `materia`.`Universidad_idUniversidad` = `idUniversidad`";
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

exports.detalleOpinion=function(id, callback){
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }
        var query = "Select * From `opinion` inner join `usuario` on `opinion`.`Usuario_idUsuario` = `cedulaUsuario` inner join `materia` on `opinion`.`Materia_id Materia` = `idMateria` inner join `universidad` on `materia`.`Universidad_idUniversidad` = `idUniversidad` where `idOpinion` = "+id;
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

exports.numeroOpinionesMateria=function(id, callback){
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }
        var query = "SELECT count(*) as opiniones FROM `opinion` where `Materia_id Materia` = "+id;
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

exports.opinionesMateria=function(id, callback){
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }
        var query = "SELECT * FROM `opinion` inner join `usuario` on `opinion`.`Usuario_idUsuario` = `cedulaUsuario` inner join `materia` on `opinion`.`Materia_id Materia` = `idMateria` inner join `universidad` on `materia`.`Universidad_idUniversidad` = `idUniversidad` where `Materia_id Materia` = "+id;
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

exports.nuevaOpinion=function(DTOOpinion, callback){
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }
        var query = "INSERT INTO `opinion` (`idOpinion`, `calificacionDificultad`, `calificacionTiempo`, `opinion`, `Usuario_idUsuario`, `Materia_id Materia`) VALUES (NULL, '"+ DTOOpinion.calificacionDificultad +"', '"+ DTOOpinion.calificacionTiempo +"', '"+ DTOOpinion.opinion +"', '"+ DTOOpinion.Usuario_idUsuario +"', '"+ DTOOpinion.Materia_idMateria +"')";
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