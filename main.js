var cats = [
	{name: "Fluffy", color: "Green", url: "https://i.ytimg.com/vi/-OJMIqVrON0/maxresdefault.jpg"},
	{name: "Sabrina", color: "moreGreen", url: "http://static.boredpanda.com/blog/wp-content/uploads/2014/12/green-cat-varna-bulgaria-11.jpg"},
	{name: "Killer", color: "mostGreen", url: "https://i.ytimg.com/vi/JGjV__mueic/maxresdefault.jpg"},
	{name: "Furry", color: "kindaGreen", url: "http://i.dailymail.co.uk/i/pix/2014/12/12/2400161300000578-2871954-Theory_It_is_thought_the_cat_s_coat_is_dyed_green_by_paint_she_r-a-40_1418413395806.jpg"}
];
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