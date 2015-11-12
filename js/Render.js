
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

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

var data = new Array();

var isWhite = false;

for (var i = 7; i >= 0; i--) {
	isWhite = !isWhite;
	data[i] = {
		index: 8 - i, 
		arr: new Array()
	};
	for (var j = 1; j < 9; j++) {
		isWhite = !isWhite;
		data[i].arr[j] = {
			letter: letters[j-1],
			num: 8 - i,
			color: isWhite ? 'white' : 'black'
		};	
	}
}

console.log(data);

var template = Handlebars.compile(source);
var result = template({data: data, letters: letters});

document.getElementsByClassName('chess-area')[0].innerHTML = result;
