var express = require('express');
var router = express.Router();

// Require controller modules
var usuario_controller = require('../controllers/usuarioController');


router.get('/signin', usuario_controller.signin);

module.exports = router;