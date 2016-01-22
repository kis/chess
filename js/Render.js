import React from 'react';
import ReactDOM from 'react-dom';
import Draggable, {DraggableCore} from 'react-draggable';

import Field from './Logic/Field';

class ChessField extends React.Component {
	stopDragFigure(e, data) {
		let attrs = data.node.parentElement.attributes;
		let oldX = attrs['data-x'];
		let oldY = attrs['data-y'];
		console.log(oldX, oldY)

		let transform = data.node.style.transform;
		let arr = transform.match(/(-)?\d{1,3}/g);
		let [x, y] = arr;
		let [deltaX, deltaY] = [x/90, y/90];
		console.log(deltaX, deltaY)
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

		return <Draggable onStop={this.stopDragFigure} grid={dragOptions.grid} bounds={dragOptions.bounds}>
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