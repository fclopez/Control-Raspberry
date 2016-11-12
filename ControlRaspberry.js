/*dependencias*/
var io = require('socket.io-client');
var socket = io.connect('https://server-socket.herokuapp.com/',{reconnect:true});
var leds = require('./clientLED');
var pir = require('./clientPIR');
var gas = require('./clientMQ2');
var agua = require('./clientWaterFlow');

/*inicia la funcion de detección*/
socket.on('SensorPIR',function(msg){
SensorPIR(msg);
});

socket.on('SensorMQ2',function(msg){
SensorMQ2(msg);
});

socket.on('SensorLED',function(msg){
SensorLED(msg);
});

socket.on('SensorAgua',function(msg){
SensorAgua(msg);
});
/*funcion que permite observar la entrada del pin de datos de PIR */
function SensorPIR(msg){
switch (msg) {
  case "true":
  pir.ActivarPIR(socket);
  break;
  case "false":
  pir.DesactivarPIR(socket);
  break;
  default:
}
}

/*funcion que permite observar la entrada del pin de datos MQ2 */
function SensorMQ2(msg){
switch (msg) {
  case "true":
  gas.ActivarMQ2(socket);
  break;
  case "false":
  gas.DesactivarMQ2(socket);
  break;
  default:
}
}

/*funcion que permite observar la entrada del pin de datos LED */
function SensorLED(msg){
switch (msg) {
  case "true":
  leds.ActivarLED(socket);
  break;
  case "false":
  leds.DesactivarLED(socket);
  break;
  default:
}
}

/*funcion que permite observar la entrada del pin de datos LED */
function SensorAGUA(msg){
switch (msg) {
  case "true":
  agua.ActivarAGUA(socket);
  break;
  case "false":
  agua.DesactivarAGUA(socket);
  break;
  default:
}
}

console.log('Cliente Socket RaspberryPI 3 Iniciando...');
