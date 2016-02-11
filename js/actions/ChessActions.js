var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/ChessConstants');

var TodoActions = {

  create: function(text) {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_CREATE,
      text: text
    });
  }

};

module.exports = TodoActions;