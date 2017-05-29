var express = require('express');
var app = express();
var session = require('express-session');
var dao = require('../models/DAOOpinion');
var opinion = require('../models/DTOopinion');
var daoMateria = require('../models/DAOMateria');

app.use(session({secret: 'ssshhhhh'}));
// listar opiniones
exports.listar = function(req, res) {
	dao.listarTodas(function(err, result) {
		if(err) {
			console.log(err.message);
			return;
		}
		console.log(result);
		res.render('Opiniones', { pag: 'Tu pensum - Opiniones', title: 'Tu Pensum', data: result });
	});
};

// listar opiniones por materia
exports.opinionesMateria = function(req, res) {
	dao.opinionesMateria(req.params.idmateria, function(err, result) {
		if(err) {
			console.log(err.message);
			return;
		}
		console.log(result);
		res.render('opinionesMateria', { pag: 'Tu pensum - Opiniones', title: 'Tu Pensum', data: result });
	});
};

// Detalle de una opinion
exports.opinionDetalle = function(req, res) {
	dao.detalleOpinion(req.params.id, function(err, result) {
		if(err) {
			console.log(err.message);
			return;
		}
		console.log(result);
		res.render('detalleOpinion', { pag: 'Tu pensum - Opiniones', title: 'Tu Pensum', data: result});
	});
};

// Nueva opinion
exports.nuevaOpinion = function(req, res) {
	var sess = req.session;
	console.log("Nueva");
	if(sess.logged){
		daoMateria.listarTodas(function(err, result) {
			if(err) {
				console.log(err.message);
				return;
			}
			console.log(result);

			res.render('nuevaOpinion', { pag: 'Tu pensum - Opiniones', title: 'Tu Pensum', data: result });
		});
	}else{
		res.redirect('/signin');
	}
};

// Atender nueva opinion
exports.ingresarNuevaOpinion = function(req, res) {
	var sess = req.session;
	console.log("Nueva");
	opinion.calificacionDificultad = req.body.txtDificultad;
	opinion.calificacionTiempo = req.body.txtTiempo;
	opinion.opinion = req.body.txtOpinion;
	opinion.Usuario_idUsuario = sess.cedulaUsuario;
	opinion.Materia_idMateria = req.body.txtMateria;
	dao.nuevaOpinion(opinion, function(err, result) {
		if(err) {
			console.log(err.message);
			return;
		}
		console.log(result);

		res.redirect('/opiniones');
	});
};