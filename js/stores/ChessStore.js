var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ChessConstants = require('../constants/ChessConstants');

var CHANGE_EVENT = 'change';

import Field from '../components/Logic/Field';

var field = {};

function moveFigureToCell(eData) {
  var data = eData.data;
  var oldPos = eData.oldPos;
  var pos = eData.pos;

  var obj = Object.assign({}, data);
  var figureCopy = obj[oldPos.y][oldPos.x].figure;
  
  console.log(obj[oldPos.y][oldPos.x])
  
  data[pos.y][pos.x].figure = figureCopy;
  data[oldPos.y][oldPos.x].figure = null;

  field.data = data;
}

function repaintCell(eData) {
  var data = eData.data;
  var oldPos = eData.oldPos;

  var obj = Object.assign({}, data);
  var figureCopy = obj[oldPos.y][oldPos.x].figure;

  data[oldPos.y][oldPos.x].figure = null;
  field.data = data;
  ChessStore.emitChange();

  setTimeout(() => {
    data[oldPos.y][oldPos.x].figure = figureCopy;
    field.data = data;
  }, 100);
}

var ChessStore = Object.assign({}, EventEmitter.prototype, {
  initField: function() {
    field = new Field();
    return field;
  },

  getField: function() {
    return field;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  var data;

  switch(action.actionType) {
    case ChessConstants.MOVE_FIGURE_TO_CELL:
      moveFigureToCell(action.data);
      ChessStore.emitChange();
      break;

    case ChessConstants.REPAINT_CELL:
      repaintCell(action.data);
      ChessStore.emitChange();
      break;
  }
});

module.exports = ChessStore;