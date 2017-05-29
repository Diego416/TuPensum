var express = require('express');
var router = express.Router();

// Require controller modules
var materia_controller = require('../controllers/materiaController');


router.get('/', materia_controller.listar);
router.get('/:id', materia_controller.materiaDetalle);

module.exports = router;