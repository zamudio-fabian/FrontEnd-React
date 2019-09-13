import types from './GitHubRepositoryDescription.types';

const initialRepositoriesDescriptionState = {
	repository: {},
	fetchingRepository: false,
};

const getGitHubRepositoriesDescriptionReducer = (
	state = initialRepositoriesDescriptionState,
	action
) => {
	switch (action.type) {
		case types.GITHUB_DESCRIPTION_FETCH:
			return {
				...state,
				fetchingRepository: true,
			};
		case types.RECEIVE_GITHUB_DESCRIPTION:
			return {
				...state,
				repository: action.payload.repository,
				fetchingRepository: false,
			};
		default:
			return state;
	}
};

export default getGitHubRepositoriesDescriptionReducer;
