import React from 'react';
import ReactDOM from 'react-dom';
import Draggable, {DraggableCore} from 'react-draggable';

import Field from './Logic/Field';

class ChessField extends React.Component {
	startDragFigure(e, data) {
		console.log(e, data)
	}

	renderLettersLine() {
		return <div className='letters-line'>
			{this.renderLettersField()}
			{this.props.letters.map((result, i) => {
				return this.renderLettersField(result, i)
			})}
		</div>
	}

	renderLettersField(data, key) {
		return <div className="letters-field figure" key={key}>{data}</div>
	}

	renderFigure(data) {
		console.log(data)
		return <Draggable onStart={this.startDragFigure} grid={[90, 90]} bounds={{top: -100, left: -100, right: 100, bottom: 100}}>
			<div className="figure" dangerouslySetInnerHTML={{__html: data.figure ? data.figure.code : null}}></div>
		</Draggable>
	}

	renderChessCell(data, key) {
		var cellClass = "chess-field " + data.class;
		return <div className={cellClass} key={key}>
			{this.renderFigure(data)}
		</div>
	}

	renderChessLines() {
		return this.props.data.map((result, i) => {
		  	return <div className="chess-line" key={i}>
		  		{this.renderLettersField(8-i)}
			 	{result.arr.map((res, j) => {
			 		return this.renderChessCell(res, j)
			 	})}
			 	{this.renderLettersField(8-i)}
			</div>
		})
	}

	render() {
		return ( 
			<div>
				{this.renderLettersLine()}
				{this.renderChessLines()}
				{this.renderLettersLine()}
			</div>
		);
	}
}

var field = new Field();
var letters = field.letters;
var data = field.getInitState();

ReactDOM.render(<ChessField letters={letters} data={data} />, document.getElementsByClassName('chess-area')[0]);