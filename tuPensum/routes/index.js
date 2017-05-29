var express = require('express');
var app = express();
var session = require('express-session');
var router = express.Router();
var daoCarrera = require('../models/DAOCarrera');
var daoSeleccion = require('../models/DAOSeleccion');
var dtoSeleccion = require('../models/DTOseleccion');
var daoCuenta = require('../models/DAOUsuario');
var dtoCuenta = require('../models/DTOCuentaUsuario');
var dtoUsuario = require('../models/DTOUsuario');
var sess;
app.use(session({secret: 'ssshhhhh'}));
/* GET home page. */
router.get('/', function(req, res, next) {
	sess = req.session;
	res.locals.username = sess.username;
	res.locals.logged = sess.logged;
	res.render('index', { pag: 'Tu pensum - Home', title: 'Tu Pensum' });
});

router.get('/logout', function(req, res, next) {
	sess = req.session;
	sess.logged = false;
	sess.username = "";
	res.locals.username = sess.username;
	res.locals.logged = sess.logged;
	res.render('index', { pag: 'Tu pensum - Home', title: 'Tu Pensum' });
});

router.get('/perfil', function(req, res, next) {
  sess = req.session;

  daoCuenta.getCedula(sess.username, function(err, result) {
  	if(err) {
  		console.log(err.message);
		return;
	}
	console.log(result);
	res.render('perfil', { pag: 'Tu pensum - Signin', title: 'Tu Pensum', data: result });
  });  
});

router.post('/perfil', function(req, res, next) {
  sess = req.session;
  dtoCuenta.userName = sess.username;
  dtoCuenta.password = req.body.txtPassword;
  daoCuenta.actualizarCuentaUsuario(dtoCuenta, function(err, result) {
  	if(err) {
  		console.log(err.message);
		return;
	}
	console.log(result);
	dtoUsuario.cedulaUsuario = sess.cedulaUsuario;
  	dtoUsuario.nombre = req.body.txtNombre;
  	dtoUsuario.apellido = req.body.txtApellido;
  	dtoUsuario.email = req.body.txtEmail;
  	dtoUsuario.cuentaUsuario = sess.username;
	daoCuenta.actualizarUsuario(dtoUsuario, function(err, result) {
	  	if(err) {
	  		console.log(err.message);
			return;
		}
		console.log(result);
		
		res.redirect('/perfil');
	});
  });  
});

router.get('/signin', function(req, res, next) {
  res.render('signin', { pag: 'Tu pensum - Signin', title: 'Tu Pensum' });
});

router.post('/signin', function(req, res, next) {
  daoCuenta.signin(req.body.txtUserName, req.body.txtPassword, function(err, result) {
  	if(err) {
  		console.log(err.message);
		return;
	}
	
	console.log(result[0]);
	var count = result[0].cuenta;
	if(count > 0){
		daoCuenta.getCedula(req.body.txtUserName, function(err, result) {
		  	if(err) {
		  		console.log(err.message);
				return;
			}
			
			console.log(result[0]);
			sess = req.session;
			sess.logged = true;
			sess.username = req.body.txtUserName;
			sess.cedulaUsuario = result[0].cedulaUsuario;
			res.locals.username = sess.username;
			res.locals.logged = sess.logged;
			res.render('index', { pag: 'Tu pensum - Home', title: 'Tu Pensum' });
		});
	}else{
		res.render('signin', { pag: 'Tu pensum - Signin', title: 'Tu Pensum', errorMessage: "Usuario y/o contraseña incorrectos"});
	}
  });
});

router.get('/signup', function(req, res, next) {
  daoCarrera.listarTodas(function(err, result) {
  	if(err) {
  		console.log(err.message);
		return;
	}
	console.log(result);
	res.render('signup', { pag: 'Tu pensum - Signin', title: 'Tu Pensum', carreras: result });
  });  
});

router.post('/signup', function(req, res, next) {
  dtoCuenta.userName = req.body.txtUserName;
  dtoCuenta.password = req.body.txtPassword;
  daoCuenta.insertCuentaUsuaario(dtoCuenta, function(err, result) {
  	if(err) {
  		console.log(err.message);
		return;
	}
	console.log(result);
	console.log(result.usuarioExiste);
	if (result.usuarioExiste != true){
		dtoUsuario.cedulaUsuario = req.body.txtCedula;
		dtoUsuario.nombre = req.body.txtNombre;
		dtoUsuario.apellido = req.body.txtApellido;
		dtoUsuario.email = req.body.txtEmail;
		dtoUsuario.cuentaUsuario = req.body.txtUserName;
		console.log("Lista la cuenta");
		daoCuenta.insertUsuaario(dtoUsuario, function(err, result) {
		  	if(err) {
		  		console.log(err.message);
		  		console.log("Error1");
				return;
			}
			if (result.usuarioExiste != true){
				console.log(result);
				console.log("Listo el usuario");
				dtoSeleccion.usuario = req.body.txtCedula;
				dtoSeleccion.carrera = req.body.txtCarrera;
				dtoSeleccion.semestre = req.body.txtSemestre;
				daoSeleccion.ingresarSeleccion(dtoSeleccion, function(err, result) {
				  	if(err) {
				  		console.log(err.message);
				  		console.log("Error1");
						return;
					}
					console.log(result);
					console.log("Lista la seleccion");

					sess = req.session;
					sess.logged = true;
					sess.username = req.body.txtUserName;
					res.locals.username = sess.username;
					res.locals.logged = sess.logged;
					res.render('index', { pag: 'Tu pensum - Home', title: 'Tu Pensum' });	
				});
			}else{
				res.render('signup', { pag: 'Tu pensum - Signin', title: 'Tu Pensum', errorMessage: "El usuario ya existe"});
			}			
		});
	}else{
		res.render('signup', { pag: 'Tu pensum - Signin', title: 'Tu Pensum', errorMessage: "El usuer name ya existe, por favor intente de nuevo con uno nuevo"});
	}
  });
});

module.exports = router;
