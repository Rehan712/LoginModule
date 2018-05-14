import { takeLatest, all, fork } from 'redux-saga/effects';
import getDataSaga from './getDataSaga';
import * as types from '../constants';
import submitDataSaga from './submitDataSaga';

function* watchGetData() {
	yield takeLatest(types.GET_DATA, getDataSaga);
}

function* watchSubmitData() {
	yield takeLatest(types.SUBMIT_DATA, submitDataSaga);
}

export default function* rootSaga() {
	yield all([fork(watchGetData), fork(watchSubmitData)]);
}
