import React from 'react';
import ReactDOM from 'react-dom';
import Draggable, {DraggableCore} from 'react-draggable';

import Field from './Logic/Field';

const field = new Field();
const CellWidth = 90;

class Figure extends React.Component {
	constructor(props) {
		super(props);

		this.dragOptions = {
			bounds: {
				left: -90*this.props.opts.x,
				top: -90*this.props.opts.y,
				right: 90*(7-this.props.opts.x), 
				bottom: 90*(7-this.props.opts.y)
			},
			grid: [CellWidth, CellWidth]
		};
	}

	dropFigure(elData, e, data) {
		console.log(elData, e, data)

		let transform = data.node.style.transform;
		let arr = transform.match(/(-)?\d{1,3}/g);
		let [a, b] = arr;
		let [deltaX, deltaY] = [a/90, b/90];
		var {x, y} = elData.figure.pos;
		let [newX, newY] = [x+deltaX, y+deltaY];
		this.processMoving(elData, {x: newX, y: newY});
	}

	processMoving(elData, pos) {
		// console.log(pos.x, pos.y);

		var moveStatus = field.getMoveStatus(elData, pos);
		var isValidMove = moveStatus.valid;

		console.log(isValidMove)

		let oldPos = Object.assign({}, elData.figure.pos);

		if (!isValidMove) {

			// let component = this.state.data[oldPos.y].arr[oldPos.x].component;
			// console.log(component)

			// console.log(DraggableCore)

			/*component.setState({
	    		clientX: 0,
	    		clientY: 0
	    	});*/

			// console.log(this.state.data[oldPos.y].arr[oldPos.x].component)

			// this.state.data[oldPos.y].arr[oldPos.x].component.setState({clientX: 0, clientY:})


			// setTimeout(() => {
				// this.setState({figureClass: 'figure figure-init'});

				/*this.setState({figureStyle: {
					transform: 'translate(0px, 0px)',
					width: '90px'
				}});*/
			// }, 500);
			
			/*setTimeout(() => {
				this.setState({data: this.state.data});
			}, 500);*/

		} else {
			
			//change figure pos
			elData.figure.move(pos);

			this.props.moveFigureToCell(oldPos, pos);

			//change props data - change figures
			/*this.props.field[pos.y].arr[pos.x].figure = elData.figure;
			this.props.field[pos.y].arr[pos.x].isEmpty = false;

			this.props.field[oldPos.y].arr[oldPos.x].figure = null;
			this.props.field[oldPos.y].arr[oldPos.x].isEmpty = true;*/

			// console.log(this.state.parent)

			// ChessField.moveFigureToCell(oldPos, pos);
			// ChessField

			/*setTimeout(() => {
				ChessField.setData(this.data);
			}, 500);*/		

			// console.log(this.data[oldPos.y].arr[oldPos.x])
			// console.log(this.data[pos.y].arr[pos.x])
		}
	}

	render() {
		var dropFigure = this.dropFigure.bind(this, this.props.opts);

		/*this.state.data[data.y].arr[data.x].component = new Draggable({
			start: 0
		});*/

		return <Draggable onStop={dropFigure} grid={this.dragOptions.grid} bounds={this.dragOptions.bounds}>
			<div className='figure' dangerouslySetInnerHTML={{__html: this.props.opts.figure ? this.props.opts.figure.code : null}}></div>
		</Draggable>;
	}
}


class ChessField extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			letters: field.letters,
			data: field.getInitState()
		}
	}

	moveFigureToCell(oldPos, pos) {
		console.log(oldPos, pos)

		/*this.state.data[pos.y].arr[pos.x].figure = Object.assign({}, this.state.data[oldPos.y].arr[oldPos.x].figure);
		this.state.data[pos.y].arr[pos.x].isEmpty = false;

		this.state.data[oldPos.y].arr[oldPos.x].figure = null;
		this.state.data[oldPos.y].arr[oldPos.x].isEmpty = true;*/
	}

	renderLettersLine() {
		return <div className='letters-line'>
			{this.renderLettersField()}
			{this.state.letters.map((result, i) => {
				return this.renderLettersField(result, i)
			})}
		</div>
	}

	renderLettersField(data, key) {
		return <div className="letters-field figure" key={key}>{data}</div>
	}

	renderChessLines() {
		return this.state.data.map((result, i) => {
		  	return <div className="chess-line" key={i}>
		  		{this.renderLettersField(8-i)}
			 	{result.arr.map((res, j) => {
			 		return this.renderChessCell(res, j)
			 	})}
			 	{this.renderLettersField(8-i)}
			</div>
		})
	}

	renderChessCell(res, key) {
		var cellClass = "chess-field " + res.class;
		/*var figure = new Figure({
			data: res
		});*/

		return <div className={cellClass} data-x={res.x} data-y={res.y} key={key}>
			<Figure opts={res} 
					field={this.state.data} 
					moveFigureToCell={this.moveFigureToCell} />
		</div>
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

ReactDOM.render(<ChessField />, document.getElementsByClassName('chess-area')[0]);