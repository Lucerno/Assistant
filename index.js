var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8080;
var fs = require("fs");
var vm = require('vm');
const Dossier = 'libs';

app.use(express.static(__dirname + '/www'));

http.listen(port, function(){
	console.log('listening on *:' + port);
});

eval(fs.readFileSync(__dirname + '/reconnaissance.js')+'');

io.on('connection', function(socket){ //Si on détecte un socket (information)
	socket.on('message_utilisateur', function(msg){ //Si c'est message_utilisateur
		var retour = "";
		retour = reconnaissance("" + msg + "");
		io.emit('message_assistant', retour); //On renvoye une valeur
		console.log('message de l\'utilisateur: ' + msg); //On écris dans la console
	});
});