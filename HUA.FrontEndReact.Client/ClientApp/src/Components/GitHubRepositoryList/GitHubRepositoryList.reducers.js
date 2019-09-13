import types from './GitHubRepositoryList.types';

const initialRepositoriesState = {
	repositories: [],
};

const getGitHubRepositoriesReducer = (
	state = initialRepositoriesState,
	action
) => {
	switch (action.type) {
		case types.RECEIVE_GITHUB_REPOSITORIES:
			return {
				...state,
				repositories: action.payload.items,
			};
		default:
			return state;
	}
};

export default getGitHubRepositoriesReducer;
