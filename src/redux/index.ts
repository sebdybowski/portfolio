import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';

const middleware = applyMiddleware(logger, thunk);

const enhancers = composeWithDevTools(
	middleware,
);

const INITIAL_STATE = {};

const store = createStore(
	reducers,
	INITIAL_STATE,
	enhancers
);

export default store;
