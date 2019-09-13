import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router';
import history from './lib/history';

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
