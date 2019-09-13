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
		component: LoadableComponent(() => import('../Pages/Home')),
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
