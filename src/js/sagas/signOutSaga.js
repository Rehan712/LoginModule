import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

export default function* signOutSaga() {
	localStorage.removeItem('token');
	localStorage.removeItem('id');
	yield put(push('/login'));
}
