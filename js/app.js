import React from 'react';
import ReactDOM from 'react-dom';

import Field from './Components/Logic/Field';
import ChessField from './Components/ChessField';
import Options from './Components/Options';

const field = new Field();

ReactDOM.render(<ChessField field={field} />, document.getElementsByClassName('chess-area')[0]);

let currentFigure = 'Black';

ReactDOM.render(<Options currentFigure={currentFigure} />, document.getElementsByClassName('chess-options')[0]);

