import { takeEvery, call, put } from 'redux-saga/effects';
import commentActions from '../reducer/comment/commentActions';
import { commentAddApi, commentReadAPI } from '../API/comment/commentAPI';

function* addComment({ payload }) {
  const result = yield call(commentAddApi, payload);
  console.log(result);
  if (result) {
    yield put(commentActions.addSuccess(result));
  } else {
    yield put(commentActions.addFailure());
  }
}

function* getComment() {
  const result = yield call(commentReadAPI);
  yield put(commentActions.getSuccess(result));
}

function* commentSaga() {
  yield takeEvery(commentActions.ADD_PENDING, addComment);
  yield takeEvery(commentActions.ADD_SUCCESS, getComment);
  yield takeEvery(commentActions.GET_COMMENT, getComment);
}

export default commentSaga;
