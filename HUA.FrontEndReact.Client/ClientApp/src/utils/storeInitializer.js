import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import SessionService from '../services/SessionService';
import initializeSagas from './sagasInitializer';

const SessionStore = SessionService.getReducer();

export default function initializeStores() {
	const sagaMiddleware = createSagaMiddleware();
	const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
		? window.__REDUX_DEVTOOLS_EXTENSION__()
		: (f) => f;
	const rootStore = createStore(
		combineReducers({
			session: SessionStore,
			form: formReducer,
		}),
		{},
		compose(
			applyMiddleware(sagaMiddleware, logger),
			devTools
		)
	);

	sagaMiddleware.run(initializeSagas);

	return rootStore;
}
