var dao = require('../models/DAOMateria');
var daoOpinion = require('../models/DAOOpinion');
var materia = require('../models/DTOmateria');

// listar materias
exports.listar = function(req, res) {
	dao.listarTodas(function(err, result) {
		if(err) {
			console.log(err.message);
			return;
		}
		console.log(result);
		res.render('materias', { pag: 'Tu pensum - Materias', title: 'Tu Pensum', data: result });
	});
};

// Detalle de una materia
exports.materiaDetalle = function(req, res) {
	dao.detalleMateria(req.params.id, function(err, result) {
		if(err) {
			console.log(err.message);
			return;
		}
		console.log(result);
		daoOpinion.numeroOpinionesMateria(req.params.id, function(err, count) {
			if(err) {
				console.log(err.message);
				return;
			}
			console.log(count);
			res.render('detalleMateria', { pag: 'Tu pensum - Materias', title: 'Tu Pensum', data: result, count: count });
		});
	});
};