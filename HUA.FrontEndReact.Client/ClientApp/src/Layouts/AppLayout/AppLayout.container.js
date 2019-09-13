import * as React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import DocumentTitle from 'react-document-title';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Header from '../../Components/Header';
import Aside from '../../Components/Aside';
import { appRouters } from '../../Router/router.config';
import Utils from '../../lib/Utils';
import './AppLayout.style.css';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
	},
}));

export default function AppLayout(props) {
	const classes = useStyles();
	const {
		routes,
		// history,
		location: { pathname },
	} = props;

	const layout = (
		<div className={classes.root}>
			<CssBaseline />
			<Header routes={routes} />
			<Grid
				container
				direction="row"
				justify="flex-start"
				alignItems="flex-start">
				<Aside className="h100" />
				<main className="main">
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

						<Redirect from="/" to="/home" />
					</Switch>
				</main>
			</Grid>
		</div>
	);

	return (
		<DocumentTitle title={Utils.getPageTitle(pathname)}>
			{layout}
		</DocumentTitle>
	);
}
