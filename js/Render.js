import React from 'react';
import ReactDOM from 'react-dom';

import Field from './Logic/Field';

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
		  			 	  	<span className="figure" dangerouslySetInnerHTML={{__html: res.figure ? res.figure.code : null}}></span>
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

ReactDOM.render(<ChessField letters={letters} data={data} />, document.getElementsByClassName('chess-area')[0]);
