import React from 'react';

import Figure from './Figure';

class ChessField extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: this.props.field.getInitState()
		};
	}

	moveFigureToCell(data, oldPos, pos) {
		var obj = Object.assign({}, data);
		var figureCopy = obj[oldPos.y].arr[oldPos.x].figure;
		data[pos.y].arr[pos.x].figure = figureCopy;
		data[pos.y].arr[pos.x].isEmpty = false;
		data[oldPos.y].arr[oldPos.x].figure = null;
		data[oldPos.y].arr[oldPos.x].isEmpty = true;

		setTimeout(() => {
			this.setState({data: data});
		}, 100);
	}

	repaintCell(data, oldPos) {
		var obj = Object.assign({}, data);
		var figureCopy = obj[oldPos.y].arr[oldPos.x].figure;

		setTimeout(() => {
			data[oldPos.y].arr[oldPos.x].figure = null;
			this.setState({data: data});
			data[oldPos.y].arr[oldPos.x].figure = figureCopy;
			this.setState({data: data});
		}, 100);
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

	renderFigure(res, opts) {
		return <Figure opts={res} 
				field={this.props.field} 
				moveFigureToCell={opts.moveFigure}
				repaintCell={opts.repaintCell} />
	}

	renderChessCell(res, key) {
		var cellClass = "chess-field " + res.class;

		var opts = {
			moveFigure: this.moveFigureToCell.bind(this, this.state.data),
			repaintCell: this.repaintCell.bind(this, this.state.data)
		};

		return <div className={cellClass} data-x={res.x} data-y={res.y} key={key}>
			{res.figure ? this.renderFigure(res, opts) : null}
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

export default ChessField;