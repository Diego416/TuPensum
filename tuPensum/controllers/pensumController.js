var express = require('express');
var app = express();
var session = require('express-session');
var dao = require('../models/DAOPensum');
var daoSeleccion = require('../models/DAOSeleccion');
var sess;
app.use(session({secret: 'ssshhhhh'}));
// listar materias
exports.obtener = function(req, res) {
	sess = req.session;
	if(sess.logged){
		daoSeleccion.obtenerCarrera(sess.cedulaUsuario, function(err, result) {
	  		if(err) {
	  			console.log(err.message);
				return;
			}
			console.log(result);

			dao.obtener(result[0].Carrera_idCarrera,function(err, result) {
				if(err) {
					console.log(err.message);
					return;
				}
				console.log(result);
				res.render('pensum', { pag: 'Tu pensum - Materias', title: 'Tu Pensum', data: result });
			});
	  	});
	}else{
		res.redirect('/signin');
	}
  	
	
};