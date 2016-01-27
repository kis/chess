import React from 'react';
import ReactDOM from 'react-dom';
import Draggable, {DraggableCore} from 'react-draggable';

import Field from './Logic/Field';

class ChessField extends React.Component {

	constructor(props) {
		super(props);

		this.field = new Field();

		this.state = {
			letters: this.field.letters,
			data: this.field.getInitState(),
			figureClass: "figure",
			figureStyle: {
				transform: 'translate(0px, 0px)'
			}
		}
	}

	componentDidMount() {
		console.log('mount')
	}

	componentWillReceiveProps(nextProps) {
	    console.log(nextProps)

	    /*_this.setState({
	    	clientX: nextProps.start.x
	        clientY: nextProps.start.y
	    });*/
	}

	dragFigure(elData, e, data) {
		setTimeout(() => {
			this.setState({figureClass: 'figure'});

			this.setState({figureStyle: {
				transform: 'translate(0px, 0px)',
				width: '90px'
			}});
		}, 500);
	}

	dropFigure(elData, e, data) {
		console.log(elData, e, data)

		// data.node.attributes[1].nodeValue = "touch-action: none; transform: translate(0px, 0px);";

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
		var moveStatus = this.field.getMoveStatus(elData, pos);
		var isValidMove = moveStatus.valid;

		console.log(isValidMove)

		let oldPos = Object.assign({}, elData.figure.pos);

		if (!isValidMove) {
			// console.log(this.state.data[oldPos.y].arr[oldPos.x].component)

			// this.state.data[oldPos.y].arr[oldPos.x].component.setState({clientX: 0, clientY:})


			setTimeout(() => {
				this.setState({figureClass: 'figure figure-init'});

				/*this.setState({figureStyle: {
					transform: 'translate(0px, 0px)',
					width: '90px'
				}});*/
			}, 500);
			
			/*setTimeout(() => {
				this.setState({data: this.state.data});
			}, 500);*/

		} else {
			
			//change figure pos
			elData.figure.move(pos);

			//change props data - change figures
			this.state.data[pos.y].arr[pos.x].figure = elData.figure;
			this.state.data[pos.y].arr[pos.x].isEmpty = false;

			this.state.data[oldPos.y].arr[oldPos.x].figure = null;
			this.state.data[oldPos.y].arr[oldPos.x].isEmpty = true;

			setTimeout(() => {
				this.setState({data: this.state.data});
			}, 500);			

			console.log(this.state.data[oldPos.y].arr[oldPos.x])
			console.log(this.state.data[pos.y].arr[pos.x])
		}
	}

	renderLettersLine(letters) {
		return <div className='letters-line'>
			{this.renderLettersField()}
			{letters.map((result, i) => {
				return this.renderLettersField(result, i)
			})}
		</div>
	}

	renderLettersField(data, key) {
		return <div className="letters-field figure" key={key}>{data}</div>
	}

	renderFigure(data) {
		const CellWidth = 90;

		var dragOptions = {
			bounds: {
				left: -90*data.x,
				top: -90*data.y,
				right: 90*(7-data.x), 
				bottom: 90*(7-data.y)
			},
			grid: [CellWidth, CellWidth]
		};

		var dragFigure = this.dragFigure.bind(this, data);
		var dropFigure = this.dropFigure.bind(this, data);

		return <Draggable onStart={dragFigure} onStop={dropFigure} grid={dragOptions.grid} bounds={dragOptions.bounds}>
			<div className={this.state.figureClass} style={this.state.figureStyle} dangerouslySetInnerHTML={{__html: data.figure ? data.figure.code : null}}></div>
		</Draggable>;
	}

	renderChessCell(data, key) {
		var cellClass = "chess-field " + data.class;
		return <div className={cellClass} data-x={data.x} data-y={data.y} key={key}>
			{data.figure ? this.renderFigure(data) : null}
		</div>
	}

	renderChessLines(data) {
		return data.map((result, i) => {
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
		var letters = this.state.letters;
		var data = this.state.data;

		return ( 
			<div>
				{this.renderLettersLine(letters)}
				{this.renderChessLines(data)}
				{this.renderLettersLine(letters)}
			</div>
		);
	}
}

ReactDOM.render(<ChessField />, document.getElementsByClassName('chess-area')[0]);