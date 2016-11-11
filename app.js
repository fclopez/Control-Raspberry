var raspi = require('raspi-io');
var five = require('johnny-five');
var board = new five.Board({
  io: new raspi()
});


var express = require('express');
var app = express();

app.get('/on', function (req, res) {
  	var led = new five.Led('P1-15');
	led.on();
	res.send('ON');
});

app.get('/off', function (req, res) {
  	var led = new five.Led('P1-15');
	led.off();
	res.send('OFF');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
