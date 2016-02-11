import React from 'react';
import ReactDOM from 'react-dom';

import Field from './components/Logic/Field';
import ChessField from './components/ChessField';
import Options from './components/Options';

//TODO
const field = new Field();

ReactDOM.render(<ChessField field={field} />, document.getElementsByClassName('chess-area')[0]);

let currentFigure = 'Black';

ReactDOM.render(<Options currentFigure={currentFigure} />, document.getElementsByClassName('chess-options')[0]);

