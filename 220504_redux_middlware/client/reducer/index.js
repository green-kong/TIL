const { combineReducers } = require('redux');

const { comment } = require('./comment.js');

const { counter } = require('./counter');

const rootReducer = combineReducers({
  comment,
  counter,
});

module.exports = rootReducer;
