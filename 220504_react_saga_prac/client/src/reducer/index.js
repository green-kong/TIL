import { combineReducers } from 'redux';

import login from './login/login';
import comment from './comment/comment';

const rootReducer = combineReducers({
  login,
  comment,
});

export default rootReducer;
