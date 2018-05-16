import * as types from '../constants';

export function getData() {
	return {
		type: types.GET_DATA
	};
}
export function getDataSuccess(data) {
	return {
		type: types.GET_DATA_SUCCESS,
		payload: data
	};
}

export function getDataAttempt() {
	return {
		type: types.GET_DATA_ATTEMPT
	};
}

export function getDataFail(error) {
	return {
		type: types.GET_DATA_FAIL,
		payload: error
	};
}

export function onEmailChange(value) {
	return {
		type: types.ON_EMAIL_CHANGE,
		payload: value
	};
}

export function onPasswordChange(value) {
	return {
		type: types.ON_PASSWORD_CHANGE,
		payload: value
	};
}

export function submitData(data) {
	return {
		type: types.SUBMIT_DATA,
		payload: data
	};
}

export function submitDataSuccess() {
	return {
		type: types.SUBMIT_DATA_SUCCESS
	};
}

export function submitDataAttempt() {
	return {
		type: types.SUBMIT_DATA_ATTEMPT
	};
}

export function submitDataFail(error) {
	return {
		type: types.SUBMIT_DATA_FAIL,
		payload: error
	};
}
export function resetState() {
	return {
		type: types.RESET_STATE
	};
}

export function signOut() {
	return {
		type: types.SIGN_OUT
	};
}
