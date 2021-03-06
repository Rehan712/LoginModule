import { put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actions from '../actions';
import * as api from '../api';

export default function* submitDataSaga(action) {
	const inputData = action.payload;
	yield put(actions.submitDataAttempt());
	try {
		const response = yield call(api.submitDataApi, inputData);
		yield put(actions.submitDataSuccess());
		yield put(push('/student'));
		localStorage.setItem('token', response.data.token);
		localStorage.setItem('id', response.data.id);
	} catch (e) {
		yield put(actions.submitDataFail(e));
	}
}
