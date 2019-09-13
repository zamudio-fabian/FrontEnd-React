import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Router from './router';
import history from './utils/history';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Router history={history} />
			</BrowserRouter>
		);
	}
}

export default App;
