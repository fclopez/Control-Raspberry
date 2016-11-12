  /*dependencias*/
  var Gpio = require('onoff').Gpio;
  pir = new Gpio(22, 'in', 'both');
  var count= 0;

/*funcion que permite observar la entrada del pin de datos de PIR */
module.exports.ActivarAGUA = function(server){
  ws = server;
  ws.emit('statusAGUA','true');
  console.log('Sensor Caudal Activado.');
  pir.watch(function(err, value) {
    if (err) exit();
    count++;
    // Revol/Lt = 600
	if(count-log>100){
	console.log('Caudal en litros: '+ (count/100) + 'Lt' +' Caudal en cm3: '+ count/1000 +'cm3');
	socket.emit('msgAGUA', count/100);
	log = 1;
	}});
  }

  module.exports.DesactivarAGUA = function(server){
    ws = server;
    pir.unwatch(function(err, value) {
      ws.emit('statusAGUA','false');
      console.log('Sensor Caudal Activado.');
      });
    }

console.log('Cliente caudal RaspberryPI 3 Iniciando...');
