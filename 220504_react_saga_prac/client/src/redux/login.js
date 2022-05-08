import { takeEvery, call, put } from 'redux-saga/effects';

import loginActions from '../reducer/login/loginActions';
import loginAPI from '../API/login/loginAPI';

function* login({ type, payload }) {
  const result = yield call(loginAPI, payload);
  if (result) {
    yield put(loginActions.loginSuccess(result));
  } else {
    alert('아이디와 비밀번호를 확인하세요');
  }
}

function* loginSaga() {
  yield takeEvery(loginActions.LOGIN_PENDING, login);
}

export default loginSaga;
