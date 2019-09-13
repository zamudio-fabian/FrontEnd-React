import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import SessionService from '../Services/SessionService';

const ProtectedRoute = ({
	path,
	component: Component,
	permission,
	render,
	authenticated,
	user,
	...rest
}) => {
	// TODO
	// var session = getSission();
	return (
		<Route
			{...rest}
			render={(props) => {
				if (!authenticated)
					return (
						<Redirect
							to={{
								pathname: '/',
								state: {
									from:
										props.location,
								},
							}}
						/>
					);

				if (
					permission &&
					!SessionService.isGranted(
						user,
						permission
					)
				) {
					return (
						<Redirect to="/exception?type=401" />
					);
				}

				return Component ? (
					<Component {...props} />
				) : (
					render(props)
				);
			}}
		/>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.session.user,
		authenticated: state.session.authenticated,
	};
};

const mapDispatchToProps = () => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProtectedRoute);
