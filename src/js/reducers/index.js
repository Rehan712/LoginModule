import { combineReducers } from 'redux';
import getDataReducer from './getDataReducer';
import submitDataReducer from './submitDataReducer';

const rootReducer = combineReducers({
	data: getDataReducer,
	inputData: submitDataReducer
});

export default rootReducer;
