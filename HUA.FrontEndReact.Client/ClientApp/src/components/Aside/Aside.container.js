import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import { routers } from '../../router/router.config';
import SessionService from '../../services/SessionService';
import Utils from '../../utils/Utils';
import './Aside.style.scss';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	toolbar: theme.mixins.toolbar,
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		borderRight: '1px solid rgba(0, 0, 0, 0.3) !important',
	},
}));

export default function AsideComponent(props) {
	const classes = useStyles();
	const { user } = props;

	function notDisplayInMenu(route) {
		const display =
			(route.permission &&
				!SessionService.isGranted(
					user,
					route.permission
				)) ||
			(route.requiredAuthentication &&
				!SessionService.isAuthenticated(user));
		return display;
	}

	return (
		<Drawer
			className={classes.drawer}
			variant="permanent"
			classes={{
				paper: classes.drawerPaper,
			}}>
			<div className={classes.toolbar} />
			<Divider />
			<List>
				{routers
					.filter(
						(item) =>
							!item.isLayout &&
							item.showInMenu
					)
					.map((route) => {
						if (notDisplayInMenu(route))
							return null;
						return (
							<NavLink
								title={
									route.title
								}
								to={route.path}
								activeClassName="is-active-nav-link"
								className="aside-nav-link"
								key={
									route.title
								}>
								<ListItem
									button
									key={
										route.title
									}>
									{/* <ListItemIcon className="aside-warpper-nav-link"><RouteIcon
											style={{
												fontSize: 22,
											}}
										/></ListItemIcon> */}
									<ListItemText
										className="aside-link-text"
										primary={
											route.title
										}
									/>
								</ListItem>
							</NavLink>
						);
					})}
				{user.permissions &&
					Utils.getRoutesByPermissions(
						user.permissions
					).map((route) => {
						if (notDisplayInMenu(route))
							return null;
						return (
							<Link
								title={
									route.title
								}
								className="aside-nav-link"
								href={
									route.path
								}
								key={
									route.title
								}>
								<ListItem
									button
									key={
										route.title
									}>
									{/* <ListItemIcon className="aside-warpper-nav-link"><RouteIcon
											style={{
												fontSize: 22,
											}}
										/></ListItemIcon> */}
									<ListItemText
										className="aside-link-text"
										primary={
											route.title
										}
									/>
								</ListItem>
							</Link>
						);
					})}
			</List>
		</Drawer>
	);
}
