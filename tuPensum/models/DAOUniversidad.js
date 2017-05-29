var pool = require('./conexion');

exports.listarTodas=function(callback){
    pool.getConnection(function(err,connection){
        if (err) {
          connection.release();
          throw err;
        }
        var query = "SELECT * FROM `universidad`";
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