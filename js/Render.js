
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
			color: isWhite ? 'chess-field white' : 'chess-field black'
		};	
	}
}

import React from 'react';
import ReactDOM from 'react-dom';

class ChessField extends React.Component {
	render() {
		return ( 
			<div>
				<div className='letters-line'>
					<div className="letters-field"></div>
					{this.props.letters.map(function(result) {
					  return <div className="letters-field">{result}</div>
					})}
				</div>
				{this.props.data.map(function(result) {
				  return <div className="chess-line">
		  			 	<div className="letters-field">{result.index}</div>
		  			 	{result.arr.map(function(res) {
		  			 	  return <div className={res.color}>{res.letter} {res.num}</div>
		  			 	})}
		  			 	<div className="letters-field">{result.index}</div>
		  			 </div>
				})}
	  			<div className="letters-line">
					<div className="letters-field"></div>
					{this.props.letters.map(function(result) {
					  return <div className="letters-field">{result}</div>
					})}
				</div>
			</div>
		);
	}
}

ReactDOM.render(<ChessField letters={letters} data={data} />, document.getElementsByClassName('chess-area')[0]);
