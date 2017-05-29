var pool = require('./conexion');

exports.signin=function(user, password, callback){
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }
        var query = "SELECT count(*) as cuenta FROM `cuentausuario` where `userName`='"+user+"' and `password`='"+password+"'";
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

exports.getCedula=function(user, callback){
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }
        var query = "SELECT * FROM `usuario` where `CuentaUsuario_userName`='"+user+"'";
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

exports.actualizarCuentaUsuario=function(DTOCuentaUsuario, callback){
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }
        var query = "UPDATE `cuentausuario` SET `password` = '"+ DTOCuentaUsuario.password +"' WHERE `cuentausuario`.`userName` = '"+ DTOCuentaUsuario.userName +"'";
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

exports.actualizarUsuario=function(DTOUsuario, callback){
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }
        var query = "UPDATE `usuario` SET `nombre` = '"+ DTOUsuario.nombre +"', `apellido` = '"+ DTOUsuario.apellido +"', `email` = '"+ DTOUsuario.email +"' WHERE `usuario`.`cedulaUsuario` = '"+ DTOUsuario.cedulaUsuario +"'";
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

exports.insertCuentaUsuaario=function(DTOCuentaUsuario,callback){
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }
        var queryCount = "SELECT count(*) as cuenta FROM `cuentausuario` where `userName`='"+ DTOCuentaUsuario.userName +"'";
        connection.query(queryCount,function(err,rows){
            connection.release();
            if(!err) {
            	console.log(rows);
            	console.log(rows.cuenta);
            	if(rows[0].cuenta == 0){
            		pool.getConnection(function(err,connection){
				        if (err) {
				          connection.release();
				          throw err;
				        }
				        var query = "INSERT INTO `cuentausuario` (`userName`, `password`) VALUES ('"+ DTOCuentaUsuario.userName +"', '"+ DTOCuentaUsuario.password +"')";
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
            	}else{
            		var error = {usuarioExiste: true};
            		callback(null, error);
            	}                
            }
        });
        connection.on('error', function(err) {
            throw err;
            return;     
        });
    });
}

exports.insertUsuaario=function(DTOUsuario,callback){
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }   

        var queryCount = "SELECT count(*) as cuenta FROM `usuario` where `cedulaUsuario`='"+ DTOUsuario.cedulaUsuario +"'";
        connection.query(queryCount,function(err,rows){
            connection.release();
            if(!err) {
            	console.log(rows);
            	console.log(rows[0].cuenta);
            	if(rows[0].cuenta == 0){
            		pool.getConnection(function(err,connection){
				        if (err) {
				          connection.release();
				          throw err;
				        }				        
				        var query = "INSERT INTO `usuario` (`cedulaUsuario`, `nombre`, `apellido`, `email`, `CuentaUsuario_userName`) VALUES ('"+ DTOUsuario.cedulaUsuario +"', '"+ DTOUsuario.nombre +"', '"+ DTOUsuario.apellido +"', '"+ DTOUsuario.email +"', '"+ DTOUsuario.cuentaUsuario +"')";
				        connection.query(query,function(err,rows){
				            connection.release();
				            if(!err) {
				                callback(null, rows);
				            }
				            console.log(rows);
				        });
				        connection.on('error', function(err) {
				            throw err;
				            return;     
				        });
				    });
            	}else{
            		var error = {usuarioExiste: true};
            		//DELETE FROM `cuentausuario` WHERE `cuentausuario`.`userName` = \'andro925\'"
            		pool.getConnection(function(err,connection){
				        if (err) {
				          connection.release();
				          throw err;
				        }
				        console.log("Eliminando");
				        var query = "DELETE FROM `cuentausuario` WHERE `cuentausuario`.`userName` = '"+ DTOUsuario.cuentaUsuario +"'";
				        connection.query(query,function(err,rows){
				            connection.release();
				            if(!err) {
				            	console.log("Eliminando2");
				            }
				        });
				        connection.on('error', function(err) {
				            throw err;
				            return;     
				        });
				    });
            		callback(null, error);
            	}                
            }
        });

        connection.on('error', function(err) {      
              throw err;
              return;     
        });
    });
}