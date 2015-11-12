
// import Handlebars from "../bower_components/handlebars/handlebars.js"

var xhr = new XMLHttpRequest();
xhr.open('GET', '/js/Field.html', false);
xhr.send();

if (xhr.status != 200) {
	console.log(xhr)
} else {
	console.log(xhr)
	var source = xhr.responseText;
}

var data = new Array();

for (var i = 1; i < 9; i++) {
	data[i] = new Array();
	for (var j = 1; j < 9; j++) {
		data[i][j] = [i, j].join('');	
	}
}

console.log(data);

var template = Handlebars.compile(source);
var result = template({data: data});

console.log(result);

document.getElementsByClassName('chess-area')[0].innerHTML = result;
