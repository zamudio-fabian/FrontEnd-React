import * as React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header';
import Aside from '../../components/Aside';
import ProtectedRoute from '../../router/ProtectedRoute';
import { privateRouters } from '../../router/router.config';
import Utils from '../../utils/Utils';
import './PrivateLayout.style.css';

class PrivateLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false,
		};
	}

	toggle = () => {
		const { collapsed } = this.state;
		this.setState({
			collapsed: !collapsed,
		});
	};

	onCollapse = (collapsed) => {
		this.setState({ collapsed });
	};

	render() {
		const {
			// history,
			location: { pathname },
		} = this.props;

		// const { path } = this.props.match;
		// const { collapsed } = this.state;
		const { collapsed } = this.state;
		const layout = (
			<Grid>
				<Header
					routes={this.routes}
					collapsed={collapsed}
					toggle={this.toggle}
				/>
				<Grid
					container
					className="main"
					direction="row"
					justify="flex-start"
					alignItems="flex-start">
					<Aside />
					<Grid className="flex">
						<Switch>
							{privateRouters
								.filter(
									(
										item
									) =>
										!item.isLayout
								)
								.map(
									(
										route
									) => (
										<ProtectedRoute
											exact={
												route.exact
											}
											path={
												route.path
											}
											component={
												route.component
											}
											key={
												route.name
											}
											permission={
												route.permission
											}
										/>
									)
								)}

							<Redirect
								from="/"
								to="/home"
							/>
						</Switch>
					</Grid>
				</Grid>
			</Grid>
		);
		return (
			<DocumentTitle
				title={`Private - ${Utils.getPageTitle(
					pathname
				)}`}>
				{layout}
			</DocumentTitle>
		);
	}
}

export default PrivateLayout;
