  /*dependencias*/
var Gpio = require('onoff').Gpio;
pir = new Gpio(17, 'in', 'both');

function exit() {
  pir.unexport();
  process.exit();
}

/*funcion que permite observar la entrada del pin de datos de PIR */
module.exports.ActivarPIR = function(server){
  ws = server;
  ws.emit("statusPIR","green");
  /*evento que revisa el estado del pin de entrada*/
  pir.watch(function(err, value) {
    if (err) exit();
    var msg = 'Intruso detectado: '+ new Date().toTimeString() + value;
    ws.emit('msgPIR','value');
    console.log('Intruso detectado: '+ new Date().toTimeString() + value);
    });
}


module.exports.DesactivarPIR = function(server){
  ws = server;
  /*evento que revisa el estado del pin de entrada*/
  pir.unwatch(function(err, value) {
    ws.emit("statusPIR","red");
    console.log('Sensor pir desactivado : '+ new Date().toTimeString() + value);
  });
}

	console.log('Cliente PIR RaspberryPI 3Iniciando...');
