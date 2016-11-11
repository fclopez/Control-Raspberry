  /*dependencias*/
  var Gpio = require('onoff').Gpio;
  pir = new Gpio(5, 'in', 'both');
  var count= 0;

  function exit() {
    pir.unexport();
    process.exit();
  }

  module.exports.ActivarMQ2 = function(server){
    ws = server;
    ws.emit('statusMQ2','green');
    console.log('Sensor MQ2 activado.');
    pir.watch(function(err, value) {
      if (err) exit();

  		if (count > 50){
        msg = '¡Peligro! Hay una fuga de gas';
        ws.emit('msgMQ2',msg);
        console.log(msg);
      }
  		count++;
      });
    }

    module.exports.DesactivarMQ2 = function(server){
      ws = server;
      pir.unwatch(function(err, value) {
        ws.emit('statusMQ2','red');
        console.log('Sensor MQ2 desactivado.');
      });
    }

    	console.log('Cliente MQ2 RaspberryPI 3 Iniciando...');
