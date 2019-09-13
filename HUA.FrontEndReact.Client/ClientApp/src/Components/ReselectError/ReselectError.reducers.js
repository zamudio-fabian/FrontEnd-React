import { combineReducers } from 'redux';
import types from './ReselectError.types';

export const usersByIdReducer = (state = {}, action) => {
	switch (action.type) {
		case types.RECEIVE_DATA: {
			const newState = { ...state };
			action.payload.users.forEach((user) => {
				newState[user.id] = user;
			});
			return newState;
		}
		default:
			return state;
	}
};

export const usersListingReducer = (state = {}, action) => {
	switch (action.type) {
		case types.RECEIVE_DATA:
			return action.payload.users.map((x) => x.id);
		default:
			return state;
	}
};

export const postsByIdReducer = (state = {}, action) => {
	switch (action.type) {
		case types.RECEIVE_DATA: {
			const newState = { ...state };
			action.payload.posts.forEach((post) => {
				newState[post.id] = post;
			});
			return newState;
		}
		default: {
			return state;
		}
	}
};

export const postListingReducer = (state = [], action) => {
	switch (action.type) {
		case types.RECEIVE_DATA:
			return action.payload.posts.map((x) => x.id);
		default:
			return state;
	}
};

export const counterReducer = (state = 1, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'RESET_INCREMENT':
			return 0;
		default:
			return state;
	}
};

export default combineReducers({
	usersById: usersByIdReducer,
	usersListing: usersListingReducer,
	postsById: postsByIdReducer,
	postListing: postListingReducer,
	count: counterReducer,
});
