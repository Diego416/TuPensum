var express = require('express');
var router = express.Router();

// Require controller modules
var pensum_controller = require('../controllers/pensumController');


router.get('/', pensum_controller.obtener);

module.exports = router;