var fs = require('fs');
var vm = require('vm');
var phrases = "salut,salut();hey,hey()";

//Exemple phrases = phrases + ";Quel temps fera t-il demain,temps.demain()";

function salut(){
	return "Salut !";
}

function hey(){
	return "Hey !";
}


	var nom = "";
	var nom_complet = "";
	fs.readdir(Dossier, (err, files) => {
		files.forEach(fichier => {
			eval(fs.readFileSync(__dirname + '/' + Dossier + '/' + fichier + '')+'');
			nom = fichier;
			nom_complet = nom.split(".");
			console.log("[+] " + nom_complet[0].charAt(0).toUpperCase() + nom_complet[0].substring(1).toLowerCase() + "");
		});
	})


function reconnaissance(phrase) {
	var phrases_separer = phrases.split(";");
	for(var i=0;i>i-1;i++){
		if(phrases_separer[i] != undefined){
			phrases_separer_2 = phrases_separer[i].split(",")
			if(phrases_separer_2[0] == phrase){
				if(phrases_separer_2[1].indexOf("(") == "-1"){
					var retour = ""+phrases_separer_2[1]+"";
				}else{
					var retour = ""+phrases_separer_2[1]+";";
				}
				var retour = eval(phrases_separer_2[1]);
				return retour;
			}
		}else{
			return "Désolé je ne peut pas vous répondre !";
			break;
		}
	}
}