
var animalDiv = document.getElementById('kat-koral');
function domString(data){
	var catString = "";
	for(var i = 0; i < data.length; i++){
		catString += `<div class="cat">`
		catString += `<div>${data[i].name}</div>`
		catString += `<img class="catImage" src="${data[i].url}">`
		catString += `</div>`
	}
	writeToDom(catString);
}
function writeToDom(strang){
	animalDiv.innerHTML += strang;

}

function executeThisCodeAfterFileLoads(){
	console.log("this", this.responseText);
	var data = JSON.parse(this.responseText);
	domString(data.cats);
}

function executeThisCodeIfFileErrors(){
	console.log("Shit Broke");
}

function executeThisCodeAfterFileLoads2(){
	console.log("this", this.responseText);
	var data = JSON.parse(this.responseText);
	domString(data.dogs);
}

function executeThisCodeIfFileErrors2(){
	console.log("Shit Broke");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "cats.json");
myRequest.send();

var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", executeThisCodeAfterFileLoads2);
myRequest2.addEventListener("error", executeThisCodeIfFileErrors2);
myRequest2.open("GET", "dogs.json");
myRequest2.send();