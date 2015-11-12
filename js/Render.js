
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

for (var i = 7; i >= 0; i--) {
	data[i] = {
		index: 8-i, 
		arr: new Array()
	};
	for (var j = 1; j < 9; j++) {
		data[i].arr[j] = {
			letter: letters[j-1],
			num: 8-i
		};	
	}
}

console.log(data);

var template = Handlebars.compile(source);
var result = template({data: data, letters: letters});

document.getElementsByClassName('chess-area')[0].innerHTML = result;
