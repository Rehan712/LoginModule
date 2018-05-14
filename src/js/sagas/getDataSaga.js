import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions';
import * as api from '../api';

export default function* getDataSaga() {
	yield put(actions.getDataAttempt());
	try {
		const response = yield call(api.getDataApi);
		yield put(actions.getDataSuccess(response));
	} catch (e) {
		yield put(actions.getDataFail(e));
	}
}
