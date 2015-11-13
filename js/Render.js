import Field from './Logic/Field';

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

var field = new Field();
var data = field.getInitState();

ReactDOM.render(<ChessField letters={field.letters} data={data} />, document.getElementsByClassName('chess-area')[0]);
