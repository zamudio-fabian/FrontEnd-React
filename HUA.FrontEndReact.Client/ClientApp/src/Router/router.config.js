import LoadableComponent from '../components/Loadable/index';

export const privateRouters = [
	{
		path: '/private',
		exact: true,
		permission: [],
		name: 'privateLayout',
		title: 'Private',
		component: LoadableComponent(() =>
			import('../layouts/PrivateLayout')
		),
		isLayout: true,
		showInMenu: true,
	},
];

export const appRouters = [
	{
		path: '/',
		exact: true,
		name: 'baseLayout',
		permission: [],
		title: 'Home',
		component: LoadableComponent(() =>
			import('../layouts/AppLayout')
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
		component: LoadableComponent(() => import('../pages/Login')),
	},
	{
		path: '/home',
		exact: true,
		permission: [],
		title: 'Home',
		name: 'home',
		icon: 'MoveToInbox',
		showInMenu: false,
		component: LoadableComponent(() => import('../pages/Home')),
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
			import('../pages/Exception')
		),
	},
];

export const routers = [...privateRouters, ...appRouters];
