const { default: axios } = require('axios');
const { createStore, compose, applyMiddleware } = require('redux');

const rootReducer = require('./reducer/index.js');

const thunk =
  ({ dispatch, getState }) =>
  (next) =>
  (action) =>
    typeof action === 'function' ? action(dispatch) : next(action);

const enhancer =
  process.env.NODE_ENV !== 'production'
    ? compose(applyMiddleware(thunk))
    : composeWithDevTool(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

console.log(store.getState());

// store.dispatch({ type: 1 });
// store.dispatch({ type: 2 });
// store.dispatch({ type: 3 });
// store.dispatch({ type: 4 });

const loginAPI = () => async (dispatch) => {
  /*
  dispatch({type:'로그인 시도중'})
  try {
    const result = await axios.post(url, body, opt);
    dispatch({ type: '로그인성공' });
  } catch (e) {
    dispatch({ type: '로그인실패' });
  }
  */
};

// store.dispatch(loginAPI);

const aa = () => (dispatch) => {
  dispatch({ type: 'check!' });
};

store.dispatch(aa());
