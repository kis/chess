import Field from './Logic/Field';

import React from 'react';
import ReactDOM from 'react-dom';

class ChessField extends React.Component {
	render() {
		return ( 
			<div>
				<div className='letters-line'>
					<div className="letters-field"></div>
					{this.props.letters.map(function(result, i) {
					  return <div className="letters-field" key={i}>{result}</div>
					})}
				</div>
				{this.props.data.map(function(result, i) {
				  return <div className="chess-line" key={i}>
		  			 	<div className="letters-field">{result.index}</div>
		  			 	{result.arr.map(function(res, j) {
		  			 	  return <div className={res.color} key={j}>{res.letter} {res.num}</div>
		  			 	})}
		  			 	<div className="letters-field">{result.index}</div>
		  			 </div>
				})}
	  			<div className="letters-line">
					<div className="letters-field"></div>
					{this.props.letters.map(function(result, i) {
					  return <div className="letters-field" key={i}>{result}</div>
					})}
				</div>
			</div>
		);
	}
}

var field = new Field();
var data = field.getInitState();

ReactDOM.render(<ChessField letters={field.letters} data={data} />, document.getElementsByClassName('chess-area')[0]);
