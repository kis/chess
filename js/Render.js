import React from 'react';
import ReactDOM from 'react-dom';
import Draggable, {DraggableCore} from 'react-draggable';

import Field from './Logic/Field';

class ChessField extends React.Component {
	dropFigure(elData, e, data) {
		let transform = data.node.style.transform;
		let arr = transform.match(/(-)?\d{1,3}/g);
		let [a, b] = arr;
		let [deltaX, deltaY] = [a/90, b/90];
		var {x, y} = elData.figure.pos;
		let [newX, newY] = [x+deltaX, y+deltaY];
		this.processMoving(elData, {x: newX, y: newY});
	}

	processMoving(elData, pos) {
		console.log(pos.x, pos.y);

		var currentField = this.props.data[pos.y].arr[pos.x];
		var isValidField = elData.figure.moveValidity(pos.x, pos.y);

		console.log(elData, currentField)

		var oursFigure;

		if (!currentField.isEmpty) {
			oursFigure = elData.figure.color == currentField.figure.color;
		}

		if (isValidField) {
			if (currentField.isEmpty) {
				console.log('можем ходить')
			} else if (!oursFigure) {
				console.log('бьем')
			} else if (oursFigure) {
				console.log('наступили на свою фигуру')
			}			
		}
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
		if (!data.figure) {
			return '';
		}

		const CellWidth = 90;

		var dragOptions = {
			start: {x: -90, y: -90},
			bounds: {
				left: -90*data.x,
				top: -90*data.y,
				right: 90*(7-data.x), 
				bottom: 90*(7-data.y)
			},
			zIndex: 99,
			grid: [CellWidth, CellWidth]
		};

		var dropFigure = this.dropFigure.bind(this, data);

		return <Draggable onStop={dropFigure} grid={dragOptions.grid} bounds={dragOptions.bounds}>
			<div className="figure" dangerouslySetInnerHTML={{__html: data.figure ? data.figure.code : null}}></div>
		</Draggable>
	}

	renderChessCell(data, key) {
		var cellClass = "chess-field " + data.class;
		return <div className={cellClass} data-x={data.x} data-y={data.y} key={key}>
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