import { createBrowserHistory } from 'history';

export default createBrowserHistory({
	basename: process.env.REACT_APP_BASE_PATH, // The base URL of the app (see below)
	forceRefresh: false, // Set true to force full page refreshes
});
