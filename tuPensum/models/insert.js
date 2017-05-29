var dao = require('./DAO');
var cuentaUsuario = require('./DTOCuentaUsuario');
var usuario = require('./DTOUsuario');

cuentaUsuario.userName = "jmunozc2";
cuentaUsuario.password = "qqdDGJ38";

dao.insertCuentaUsuaario(cuentaUsuario, function(err, result) {
 if(err) {
   console.log(err.message);
   return;
 }
  console.log("Fila insertada correctamente");
  console.log(result);
});

/*usuario.cedulaUsuario = 1152217167;
usuario.nombre: "",
usuario.apellido: "",
usuario.email: "",
usuario.cuentaUsuario: ""*/