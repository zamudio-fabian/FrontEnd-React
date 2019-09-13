import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import { Reducers as GitHubStore } from '../Components/GitHubRepositoryList';
import { Reducers as GitHubDescriptionStore } from '../Components/GitHubRepositoryDescription';
import { Reducers as ReselectErrorStore } from '../Components/ReselectError';
import { Reducers as ReselectSuccessStore } from '../Components/ReselectSuccess';
import SessionService from '../Services/SessionService';
import initializeSagas from './sagasInitializer';

const SessionStore = SessionService.getReducer();

export default function initializeStores() {
	const sagaMiddleware = createSagaMiddleware();
	const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
		? window.__REDUX_DEVTOOLS_EXTENSION__()
		: (f) => f;
	const rootStore = createStore(
		combineReducers({
			GitHubStore,
			GitHubDescriptionStore,
			ReselectErrorStore,
			ReselectSuccessStore,
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
