
var catDiv = document.getElementById('kat-koral');
function domString(event){
	var catString = "";
	for(var i = 0; i < event.length; i++){
		catString += `<div class="cat">`
		catString += `<div>${event[i].name}</div>`
		catString += `<img class="catImage" src="${event[i].url}">`
		catString += `</div>`
}
writeToDom(catString);

function writeToDom(strang){
	catDiv.innerHTML = strang;

	}

}

domString(cats);