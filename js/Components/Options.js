import React from 'react';

const FIGURES = {
	black: 'Black',
	white: 'White'
};

class Options extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentFigure: this.props.currentFigure
		};
	}

	changeCurrentFigure() {
		var black = FIGURES.black,
			white = FIGURES.white;

		this.state.currentFigure = this.state.currentFigure == black ? white : black;
	}

	start() {

	}

	restart() {

	}

	render() {
		return (
			<div>
				<div className="moving-style">{this.state.currentFigure} is moving</div>
				<div className="button-style">
					<button onClick={this.props.start}>Start</button>
				</div>
				<div className="button-style">
					<button onClick={this.props.restart}>Restart</button>
				</div>
			</div>
		);
	}
}

export default Options;