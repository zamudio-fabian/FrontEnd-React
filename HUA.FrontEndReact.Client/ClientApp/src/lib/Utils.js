// import AppConsts from './appconst';
import { routers } from '../Router/router.config';

class Utils {
	getPageTitle = (pathname) => {
		const route = routers.filter((r) => r.path === pathname);
		const localizedAppName = 'AppName';
		if (!route || route.length === 0) {
			return localizedAppName;
		}

		return `${route[0].title} | ${localizedAppName}`;
	};

	getRoute = (path) => {
		return routers.filter((route) => route.path === path)[0];
	};
}

export default new Utils();
