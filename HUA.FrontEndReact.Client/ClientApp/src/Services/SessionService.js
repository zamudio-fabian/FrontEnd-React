// More info in https://github.com/bernabe9/redux-react-session
import { SubmissionError } from 'redux-form';
import { sessionReducer, sessionService } from 'redux-react-session';
import lodash from 'lodash';

const config = {
	driver: 'LOCALSTORAGE',
};

const getReducer = () => {
	return sessionReducer;
};

const initSession = (store) => {
	sessionService.initSessionService(store, config);
};

const saveSession = (session) => {
	return sessionService.saveSession(session);
};

const loadSession = () => {
	return sessionService.loadSession();
};

const deleteSession = () => {
	return sessionService.deleteSession();
};

const saveUser = (user) => {
	return sessionService.saveUser(user);
};

const loadUser = () => {
	return sessionService.loadUser();
};

const deleteUser = () => {
	return sessionService.deleteUser();
};

const isAuthenticated = (user) => {
	return user.token && user.token !== null && user.token !== '';
};

const isGranted = (user, permissionsRequired) => {
	return (
		lodash.difference(permissionsRequired, user.permissions)
			.length === 0
	);
};

const logout = (history) => {
	deleteSession().then(() => {
		deleteUser().then(() => {
			history.push('/login');
		});
	});
};

const getPermissionsByUsername = (username) => {
	switch (username) {
		case 'fzamudio':
		case 'jsantoro':
		case 'luvargas':
			return [
				{
					name: 'Open EHR',
					link: 'https://www.google.com/',
				},
			];
		case 'lolguin':
		case 'epeluffo':
			return [
				{
					title: 'Open EHR',
					link: 'https://www.google.com/',
				},
			];
		default:
			return [];
	}
};

// Mock async login
const login = (username, password, history) => {
	const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	return sleep(1000).then(() => {
		// simulate server latency
		if (
			![
				'jsantoro',
				'fzamudio',
				'luvargas',
				'epeluffo',
				'lolguin',
			].includes(username)
		) {
			throw new SubmissionError({
				username: 'User does not exist',
				_error: 'Login failed!',
			});
		} else if (password !== '123456') {
			throw new SubmissionError({
				password: 'Wrong password',
				_error: 'Login failed!',
			});
		}
		saveSession({})
			.then(() => {
				saveUser({
					username,
					name: username,
					token: '123456789',
					permissions: getPermissionsByUsername(
						username
					),
				}).then(() => {
					history.push('/');
				});
			})
			.catch((err) => console.error(err));
	});
};

export default {
	deleteSession,
	deleteUser,
	getReducer,
	initSession,
	isGranted,
	loadSession,
	loadUser,
	login,
	logout,
	saveSession,
	saveUser,
	isAuthenticated,
};
