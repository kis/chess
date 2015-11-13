import Field from './Logic/Field';

import King from './Logic/Figures/King';

import React from 'react';
import ReactDOM from 'react-dom';

class ChessField extends React.Component {
	render() {
		return ( 
			<div>
				<div className='letters-line'>
					<div className="letters-field"></div>
					{this.props.letters.map(function(result, i) {
					  return <div className="letters-field figure" key={i}>{result}</div>
					})}
				</div>
				{this.props.data.map(function(result, i) {
				  return <div className="chess-line" key={i}>
		  			 	<div className="letters-field figure">{result.index}</div>
		  			 	{result.arr.map(function(res, j) {
		  			 	  return <div className={res.color} key={j}>
		  			 	  	<span className="figure" dangerouslySetInnerHTML={{__html: king.code}}></span>
		  			 	  </div>
		  			 	})}
		  			 	<div className="letters-field figure">{result.index}</div>
		  			 </div>
				})}
	  			<div className="letters-line">
					<div className="letters-field"></div>
					{this.props.letters.map(function(result, i) {
					  return <div className="letters-field figure" key={i}>{result}</div>
					})}
				</div>
			</div>
		);
	}
}

var field = new Field();
var letters = field.letters;
var data = field.getInitState();

var king = new King({
	name: 'King',
	init: {
		x: 5,
		y: 0
	},
	code: '&#9812;'
});

var king = new King({
	name: 'King',
	init: {
		x: 0,
		y: 0
	},
	code: '&#9812;'
});

ReactDOM.render(<ChessField letters={letters} data={data} />, document.getElementsByClassName('chess-area')[0]);
