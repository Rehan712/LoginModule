import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
// This is for the component routing

// import { BrowserRouter as Router } from 'react-router-dom';

// This is for the routing in the redux

import {
	ConnectedRouter as Router,
	routerMiddleware,
	push
} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducers';
import App from './components/App';
import rootSaga from './sagas';
import { isTokenValid } from './utils';
import * as actions from './actions';

const history = createHistory();

const middleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	process.env.NODE_ENV !== 'production' &&
		window.devToolsExtension &&
		window.devToolsExtension(),
	process.env.NODE_ENV !== 'production'
		? applyMiddleware(middleware, sagaMiddleware, logger)
		: applyMiddleware(middleware, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

if (isTokenValid()) {
	store.dispatch(actions.submitDataSuccess());
	store.dispatch(push('/student'));
} else {
	store.dispatch(push('/login'));
}

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.querySelector('#app')
);
