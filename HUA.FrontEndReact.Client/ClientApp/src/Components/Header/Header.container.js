import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import MoreIcon from '@material-ui/icons/MoreVert';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import logo from '../../images/user.png';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
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
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(
		null
	);
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
			<CssBaseline />
			<AppBar
				elevation={0}
				position="fixed"
				className={classes.appBar}>
				<Toolbar className={classNames('AppBar')}>
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

			{renderMobileMenu}
			{renderMenu}
		</div>
	);
}
