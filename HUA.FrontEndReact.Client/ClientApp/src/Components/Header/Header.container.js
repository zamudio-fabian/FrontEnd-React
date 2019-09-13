import React from 'react';
import clsx from 'clsx';
import { fade, makeStyles } from '@material-ui/core/styles';
// import MaterialIcon from '../MaterialIconAsync';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import MoreIcon from '@material-ui/icons/MoreVert';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { routers } from '../../Router/router.config';
import logo from '../../Images/user.png';
import SessionService from '../../Services/SessionService';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		width: theme.spacing(7),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: 200,
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
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
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(
		null
	);
	const [open, setOpen] = React.useState(false);
	const { user, logout } = props;
	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	function handleProfileMenuOpen(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleMobileMenuClose() {
		setMobileMoreAnchorEl(null);
	}

	function handleMenuClose() {
		setAnchorEl(null);
		handleMobileMenuClose();
	}

	function logOut() {
		logout();
		handleMenuClose();
	}

	function handleMobileMenuOpen(event) {
		setMobileMoreAnchorEl(event.currentTarget);
	}

	function handleDrawerOpen() {
		setOpen(true);
	}

	function handleDrawerClose() {
		setOpen(false);
	}

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

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>
				My account
			</MenuItem>
			<Divider />
			<MenuItem onClick={logOut}>Logout</MenuItem>
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}>
			<MenuItem>
				<IconButton
					aria-label="show 4 new mails"
					color="inherit">
					<Badge
						badgeContent={4}
						color="secondary">
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem>
				<IconButton
					aria-label="show 11 new notifications"
					color="inherit">
					<Badge
						badgeContent={11}
						color="secondary">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit">
					<Avatar src={logo} alt="User avatar" />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar
				elevation={0}
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}>
				<Toolbar>
					{!open && (
						<IconButton
							edge="start"
							className={
								classes.menuButton
							}
							color="inherit"
							onClick={
								handleDrawerOpen
							}
							aria-label="open drawer">
							<MenuIcon />
						</IconButton>
					)}
					<Typography
						className={classes.title}
						variant="h6"
						noWrap>
						React App
					</Typography>
					<div className={classes.search}>
						<div
							className={
								classes.searchIcon
							}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root:
									classes.inputRoot,
								input:
									classes.inputInput,
							}}
							inputProps={{
								'aria-label':
									'search',
							}}
						/>
					</div>
					<div className={classes.grow} />
					{user.username === undefined && (
						<Button
							component={Link}
							color="inherit"
							to="/login">
							Login
						</Button>
					)}
					{user.username !== undefined && (
						<div
							className={
								classes.sectionDesktop
							}>
							<IconButton
								aria-label="show 4 new mails"
								color="inherit">
								<Badge
									badgeContent={
										4
									}
									color="secondary">
									<MailIcon />
								</Badge>
							</IconButton>
							<IconButton
								aria-label="show 17 new notifications"
								color="inherit">
								<Badge
									badgeContent={
										17
									}
									color="secondary">
									<NotificationsIcon />
								</Badge>
							</IconButton>
							<IconButton
								edge="end"
								aria-label="account of current user"
								aria-controls={
									menuId
								}
								aria-haspopup="true"
								onClick={
									handleProfileMenuOpen
								}
								color="inherit">
								<Avatar
									alt="User avatar"
									src={
										logo
									}
								/>
							</IconButton>
						</div>
					)}
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={
								mobileMenuId
							}
							aria-haspopup="true"
							onClick={
								handleMobileMenuOpen
							}
							color="inherit">
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>
					{routers
						.filter(
							(item) =>
								!item.isLayout &&
								item.showInMenu
						)
						.map((route) => {
							if (
								notDisplayInMenu(
									route
								)
							)
								return null;
							return (
								<Link
									onClick={() => {
										handleDrawerClose();
									}}
									to={
										route.path
									}
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
			{renderMobileMenu}
			{renderMenu}
		</div>
	);
}
