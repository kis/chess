var AppDispatcher = require('../dispatcher/AppDispatcher');
var ChessConstants = require('../constants/ChessConstants');

var ChessActions = {

  moveFigureToCell: function(data) {
    AppDispatcher.dispatch({
      actionType: ChessConstants.MOVE_FIGURE_TO_CELL,
      data: data
    });
  },

  repaintCell: function(data) {
    AppDispatcher.dispatch({
      actionType: ChessConstants.REPAINT_CELL,
      data: data
    });
  }

};

module.exports = ChessActions;