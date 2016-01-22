import React from 'react';
import ReactDOM from 'react-dom';

import Field from './Logic/Field';

import 'jquery-ui';

class LettersField extends React.Component {
	render() {
		return <div className="letters-field figure" key={this.props.key}>{this.props.index}</div>
	}
}

class LettersLine extends React.Component {
	render() {
		return <div className='letters-line'>
			<LettersField />
			{this.props.letters.map(function(result, i) {
			  return <LettersField index={result} key={i} /> 
			})}
		</div>
	}
}

class ChessCell extends React.Component {
	render() {
		return <div className={this.props.data.class} key={this.props.key}>
			<span className="figure" dangerouslySetInnerHTML={{__html: this.props.data.figure ? this.props.data.figure.code : null}}></span>
		</div>
	}
}

class ChessField extends React.Component {
	render() {
		return ( 
			<div>
				<LettersLine letters={this.props.letters} />
				{this.props.data.map(function(result, i) {
				  return <div className="chess-line" key={i}>
				  		<LettersField index={result.index} />
		  			 	{result.arr.map(function(res, j) {
		  			 		return <ChessCell data={res} key={j} />
		  			 	})}
		  			 	<LettersField index={result.index} />
		  			 </div>
				})}
	  			<LettersLine letters={this.props.letters} />
			</div>
		);
	}
}

var field = new Field();
var letters = field.letters;
var data = field.getInitState();

ReactDOM.render(<ChessField letters={letters} data={data} />, document.getElementsByClassName('chess-area')[0]);

$( ".chess-area" ).draggable();
