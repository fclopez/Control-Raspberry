
 //se inicia el pin 23 con estado apagado
var GPIO = require('onoff').Gpio;
var led = new GPIO(23, 'out');
led.writeSync(0);

 /*funcion del socket el cual cambia de estado al led*/

 module.exports.ActivarLED = function(server){
	 ws = server;
	 /*funcion para encender el led*/
	  function ledOn(){
			ws.emit('statusLED','true');
	   console.log("led encendido");
	   led.writeSync(1);
	 }
 }

module.exports.DesactivarLED = function(server){
	ws = server;
	/*funcion para apagar el led*/
	function ledOff(){
		ws.emit('statusLED','false');
	  console.log("led apagado");
	  led.writeSync(0);
	}
}

console.log('Cliente LED RaspberryPI 3 Iniciando...');
