import React from 'react';
import ReactDOM from 'react-dom';

import Field from './Logic/Field';
import ChessField from './ChessField';

const field = new Field();

ReactDOM.render(<ChessField letters={field.letters} field={field} />, document.getElementsByClassName('chess-area')[0]);


