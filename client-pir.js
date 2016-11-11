  /*dependencias*/
var io = require('socket.io-client');
//var Gpio = require('onoff').Gpio;
var socket = io.connect('http://localhost:8000',{reconnect:true});
//pir = new Gpio(17, 'in', 'both');

/*inicia la funcion de detección*/
socket.on('SensorPIR',function(msg){
  SensorPIR(msg);
});

/*funcion que permite observar la entrada del pin de datos de PIR */
function SensorPIR(msg){
  switch (msg) {
    case "true":
    console.log('Mensaje recibido: '+msg);
    socket.emit("status","green");
    console.log("Mensaje enviado: green");
    /*evento que revisa el estado del pin de entrada*/
    /*pir.watch(function(err, value) {
      if (err) exit();
        console.log('Intruso detectado: '+ new Date().toTimeString() + value);
      });*/
      break;
      case "false":
      console.log('Mensaje recibido: '+msg);
      socket.emit("status","red");
      console.log("Mensaje enviado: red");
      /*evento que revisa el estado del pin de entrada*/
      /*pir.unwatch(function(err, value) {
          console.log('Sensor pir desactivado : '+ new Date().toTimeString() + value);
        });*/
        break;
    default:
  }
}

function exit() {
  pir.unexport();
  process.exit();
}

console.log('Cliente Socket RaspberryPI 3 \nIniciando modo de pruebas...');
