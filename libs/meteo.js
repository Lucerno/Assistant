var request = require('request');
var latitude = "50.5044";
var longitude = "4.4710";

//http://api.wipmania.com/jsonp?callback=?

var meteo = function(latitude, longitude, callback){
	var  url = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat='+latitude+'&lon='+longitude+'&cnt=14&mode=json&units=metric&lang=fr&appid=2bc6259e6c8231fc56c417fa5711e664';

	request(url, function(err, response, body){
		try{
			var result = JSON.parse(body);
			var previsions = {
				temperature : result.list[0].temp.day,
				city : result.city.name
			};

			callback(null, previsions);
		}catch(e){
			callback(e); 
		}
	});
}

function temperature(){
	meteo(latitude, longitude, function(err, previsions){
		return previsions.temperature;
	});
}


phrases = phrases + ";quel est la temperature,temperature()";