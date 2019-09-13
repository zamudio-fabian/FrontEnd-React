import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { routers } from '../../Router/router.config';
import SessionService from '../../Services/SessionService';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	drawerContainer: {
		maxWidth: drawerWidth,
	},
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
	},
}));

export default function PrimarySearchAppBar(props) {
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
							<Link
								to={route.path}
								style={{
									textDecoration:
										'none',
								}}
								key={
									route.title
								}>
								<ListItem
									button
									key={
										route.title
									}>
									{/* <ListItemIcon>{Icons['MoveToInbox']}</ListItemIcon> */}
									<ListItemText
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
