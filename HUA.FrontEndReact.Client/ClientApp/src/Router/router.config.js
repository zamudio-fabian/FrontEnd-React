// @flow
import LoadableComponent from '../Components/Loadable/index';

export const privateRouters = [
	{
		path: '/private',
		exact: true,
		permission: [],
		name: 'private',
		title: 'Private',
		component: LoadableComponent(() =>
			import('../Layouts/PrivateLayout')
		),
		isLayout: true,
		showInMenu: false,
	},
	{
		path: '/private/admin',
		exact: true,
		permission: ['ADMIN'],
		requiredAuthentication: true,
		name: 'private',
		title: 'Private admin',
		component: LoadableComponent(() => import('../Pages/Private')),
		showInMenu: true,
		icon: 'MoveToInbox',
	},
	{
		path: '/private/developer',
		exact: true,
		permission: ['DEVELOPER'],
		requiredAuthentication: true,
		name: 'private',
		title: 'Private developer',
		component: LoadableComponent(() => import('../Pages/Private')),
		showInMenu: true,
		icon: 'MoveToInbox',
	},
];

export const appRouters = [
	{
		path: '/',
		exact: true,
		name: 'home',
		permission: [],
		title: 'Home',
		icon: 'MoveToInbox',
		component: LoadableComponent(() =>
			import('../Layouts/AppLayout')
		),
		isLayout: true,
		showInMenu: true,
	},
	{
		path: '/Login',
		exact: true,
		permission: [],
		title: 'Login',
		name: 'Login',
		icon: 'MoveToInbox',
		showInMenu: false,
		component: LoadableComponent(() => import('../Pages/Login')),
	},
	{
		path: '/home',
		exact: true,
		permission: [],
		title: 'Home',
		name: 'home',
		icon: 'MoveToInbox',
		showInMenu: true,
		component: LoadableComponent(() => import('../Pages/Home')),
	},
	{
		path: '/github',
		exact: true,
		permission: [],
		title: 'Redux - GitHub example',
		name: 'todo',
		icon: 'MoveToInbox',
		showInMenu: true,
		component: LoadableComponent(() => import('../Pages/TodoList')),
	},
	{
		path: '/reselect-error',
		exact: true,
		permission: [],
		title: 'Reselect Error',
		name: 'reselect-error',
		icon: 'MoveToInbox',
		showInMenu: true,
		component: LoadableComponent(() =>
			import('../Pages/ReselectError')
		),
	},
	{
		path: '/reselect-success',
		exact: true,
		permission: [],
		title: 'Reselect Success',
		name: 'reselect-success',
		icon: 'MoveToInbox',
		showInMenu: true,
		component: LoadableComponent(() =>
			import('../Pages/ReselectSuccess')
		),
	},
	{
		path: '/exception',
		exact: false,
		permission: [],
		title: 'exception',
		name: 'exception',
		icon: 'MoveToInbox',
		showInMenu: false,
		component: LoadableComponent(() =>
			import('../Pages/Exception')
		),
	},
];

export const routers = [...privateRouters, ...appRouters];
