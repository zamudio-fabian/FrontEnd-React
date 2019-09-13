import axios from 'axios';

const httpClient = axios.create({
	timeout: 50000,
});

// Request
httpClient.interceptors.request.use(
	(config) => {
		// TODO define when enable TOKEN
		// var token = JWTService.getToken();

		// if (token != null) {
		// 	config.headers.common['Authorization'] =
		// 		'Bearer ' + token;
		// }
		return config;
	},
	(error) => {
		console.log('Bad request');
		console.log(error);
		// TODO do something generic for all Errors
		// Ex: show on Toast
		return Promise.reject(error);
	}
);

// Response
httpClient.interceptors.response.use(
	(respon) => {
		return respon;
	},
	(error) => {
		console.log('Bad response');
		console.log(error);
		// TODO do something generic for all Errors
		// Ex: show on Toast or create a nice message
		return Promise.reject(error);
	}
);

export default httpClient;
