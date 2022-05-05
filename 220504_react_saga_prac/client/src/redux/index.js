import { applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxSaga from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';

import loginActions from '../reducer/login/loginActions';
import loginAPI from '../API/login/loginAPI';

export const sagaMiddleware = reduxSaga();

const middlewares = [sagaMiddleware];

function* login({ type, payload }) {
  const result = yield call(loginAPI, payload);
  if (result) {
    yield put(loginActions.loginSuccess());
  } else {
    alert('아이디와 비밀번호를 확인하세요');
  }
}

export function* rootSaga() {
  yield takeEvery(loginActions.LOGIN_PENDING, login);
}

export const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));
