const { createStore, compose, applyMiddleware } = require('redux');
const reduxSaga = require('redux-saga');

const rootReducer = require('./reducer/index.js');

const { takeEvery, call, put } = require('redux-saga/effects');
const { default: axios } = require('axios');

function loginAPI(id, pw) {
  // return axios.post(url, { id, pw });
}

function* change(action) {
  const {
    payload: { id, pw },
  } = action;

  try {
    const result = yield call(loginAPI, id, pw);
    yield put({ type: '성공' });
  } catch (e) {
    yield put({ type: '실패' });
  }
}

function* rootSaga() {
  // 1. action 상태를 확인하고 싶다.
  // takeEvery : 액션값이 같을 경우, 특정함수를 호출하는 친구.
  // 첫번째 인자값 : type.action
  // 두번째 인자값 : 함수(generator 함수)
  // sideEffect(such as takeEvery,...) 쓸때는 앞에 항상 yield

  yield takeEvery('ingoo', change);
}

const sagaMiddleware = reduxSaga.default();
const middlewares = [sagaMiddleware];

const enhancer =
  process.env.NODE_ENV !== 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTool(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

store.dispatch({ type: 'ingoo', payload: { id: 'dev', pw: '1234' } });
