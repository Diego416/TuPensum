var express = require('express');
var router = express.Router();

// Require controller modules
var opinion_controller = require('../controllers/opinionController');


router.get('/', opinion_controller.listar);
router.get('/materia/:idmateria', opinion_controller.opinionesMateria);
router.get('/:id', opinion_controller.opinionDetalle);
router.get('/opinion/nueva', opinion_controller.nuevaOpinion);
router.post('/opinion/nueva', opinion_controller.ingresarNuevaOpinion);

module.exports = router;