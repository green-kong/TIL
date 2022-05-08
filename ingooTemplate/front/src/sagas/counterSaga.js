import { call, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

async function upAPI(payload) {
  // return await axios.post('http://localhost:3500', payload);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(true);
    }, 1000);
  });
}

async function downAPI(payload) {
  // return await axios.post('http://localhost:3500', payload);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(true);
    }, 1000);
  });
}

function* counterUp(action) {
  try {
    const result = yield call(upAPI, action.payload);
    yield put({ type: 'UP_SUCCESS' });
  } catch (e) {
    console.log(e);
    yield put({ type: 'UP_FAILURE' });
  }
}

function* counterDown(action) {
  try {
    yield call(downAPI, action.payload);
    yield put({ type: 'DOWN_SUCCESS' });
  } catch (e) {
    console.log(e);
    yield put({ type: 'DOWN_FAILURE' });
  }
}

export default function* watchCounterUp() {
  yield takeLatest('UP_REQUEST', counterUp);
  yield takeLatest('DOWN_REQUEST', counterDown);
}
