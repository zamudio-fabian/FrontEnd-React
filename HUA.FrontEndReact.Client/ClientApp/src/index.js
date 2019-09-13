import React from 'react';
import ReactDOM from 'react-dom';
import * as moment from 'moment';
import { Provider } from 'react-redux';
import App from './App';
import './index.scss';
import initializeStores from './utils/storeInitializer';
import SessionService from './services/SessionService';

moment.locale('es');
const store = initializeStores();
SessionService.initSession(store);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
