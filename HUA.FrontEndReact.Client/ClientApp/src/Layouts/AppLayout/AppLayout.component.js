import * as React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import Grid from '@material-ui/core/Grid';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { appRouters } from '../../Router/router.config';
import Utils from '../../lib/Utils';
import './AppLayout.style.css';

class AppLayout extends React.Component {
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
		const { collapsed } = this.state;
		const layout = (
			<Grid>
				<Grid className="headerContainer">
					<Header
						routes={this.routes}
						collapsed={collapsed}
						toggle={this.toggle}
					/>
				</Grid>
				<Grid className="mainContainer">
					<Switch>
						{appRouters
							.filter(
								(item) =>
									!item.isLayout
							)
							.map((route, index) => (
								<Route
									exact={
										route.exact
									}
									key={
										index
									}
									path={
										route.path
									}
									component={
										route.component
									}
									permission={
										route.permission
									}
								/>
							))}

						<Redirect
							from="/"
							to="/login"
						/>
					</Switch>
				</Grid>
				<Grid className="footerContainer">
					<Footer />
				</Grid>
			</Grid>
		);

		return (
			<DocumentTitle title={Utils.getPageTitle(pathname)}>
				{layout}
			</DocumentTitle>
		);
	}
}

export default AppLayout;
