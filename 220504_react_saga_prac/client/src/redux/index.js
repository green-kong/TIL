import { applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxSaga from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import loginSaga from './login';
import commentSaga from './comment';

export const sagaMiddleware = reduxSaga();

const middlewares = [sagaMiddleware];

export function* rootSaga() {
  yield all([fork(loginSaga), fork(commentSaga)]);
}

export const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));
