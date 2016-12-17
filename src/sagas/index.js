import { fork, take, put, call } from 'redux-saga/effects';
import {startSubmit, stopSubmit, reset} from 'redux-form';

import actionTypes from '../actions';
import {login} from '../util';

function* handleSubmitForm() {
  for (;;) {
    const action = yield take(actionTypes.SUBMIT_FORM);
    const {params} = action.payload;
    yield put(startSubmit('example'));
    const { data, error } = yield call(login, params);
    if (data && !error) {
      // Action on success
      yield put(stopSubmit('example'));
      console.log(data.message);
      yield put(reset('example'));
    } else {
      // Action on failure
      yield put(stopSubmit('example', error));
    }
  }
}

export default function* rootSaga() {
  yield fork(handleSubmitForm);
}
