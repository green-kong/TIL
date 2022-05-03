const redux = require('redux');
const { createStore, combineReducers } = redux;

const { user, USER_CHANGE } = require('./user');
const { comment, COMMENT_ADD } = require('./commnet');
const category = require('./category');

class actionObj {
  constructor() {
    this.CHANGE_NAME = 'change_name';
    this.ADD_COMMNET = 'add_comment';
    this.ADD_SUBCATEGORY = 'add_subcategory';
  }

  change_name = (payload) => ({ type: this.CHANGE_NAME, payload });

  add_comment = (payload) => ({ type: this.ADD_COMMNET, payload });

  add_subcategory = (payload) => ({ type: this.ADD_SUBCATEGORY, payload });
}

const test = new actionObj();

const rootReducer = combineReducers({
  user,
  comment,
  category,
});

const store = createStore(rootReducer);

store.dispatch(USER_CHANGE('dev_kong'));
store.dispatch(COMMENT_ADD({ content: '안녕하세요', date: '2022-05-04' }));
console.log(store.getState().comment);
