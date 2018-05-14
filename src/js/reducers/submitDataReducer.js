import * as types from '../constants';

const initial = {
	name: '',
	password: ''
};

export default function submitDataReducer(state = initial, action) {
	switch (action.type) {
		case types.ON_EMAIL_CHANGE:
			return { ...state, name: action.payload };
		case types.ON_PASSWORD_CHANGE:
			return { ...state, password: action.payload };
		default:
			return state;
	}
}
