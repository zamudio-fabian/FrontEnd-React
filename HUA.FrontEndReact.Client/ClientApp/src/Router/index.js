import * as React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Utils from '../utils/Utils';

const Router = () => {
	const AppLayout = Utils.getRouteByName('baseLayout').component;
	const PrivateLayout = Utils.getRouteByName('privateLayout').component;

	return (
		<Switch>
			<ProtectedRoute
				path="/private"
				render={(props) => (
					<PrivateLayout {...props} exact />
				)}
			/>
			<Route
				path="/"
				render={(props) => <AppLayout {...props} />}
			/>
		</Switch>
	);
};

export default withRouter(Router);
