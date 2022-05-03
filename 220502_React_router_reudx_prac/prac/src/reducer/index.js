import { combineReducers } from 'redux';

import comment from './comment/commentReducer';
import counter from './counter/counter';

const rootReducer = combineReducers({
  comment,
  counter,
});

export default rootReducer;
