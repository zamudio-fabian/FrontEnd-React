// import AppConsts from './appconst';
import { routers } from '../router/router.config';

class Utils {
	getPageTitle = (pathname) => {
		const route = routers.filter((r) => r.path === pathname);
		const localizedAppName = process.env.REACT_APP_APP_NAME;
		if (!route || route.length === 0) {
			return localizedAppName;
		}

		return `${route[0].title} | ${localizedAppName}`;
	};

	getRoute = (path) => {
		return routers.filter((route) => route.path === path)[0];
	};

	getRouteByName = (name) => {
		return routers.filter((route) => route.name === name)[0];
	};

	getRoutesByPermissions = (permissions) => {
		const response = permissions.map((permission) => {
			return {
				title: permission.name,
				icon: 'MoveToInbox',
				path: permission.link,
				permission: [],
				requiredAuthentication: true,
			};
		});

		return response;
	};
}

export default new Utils();
