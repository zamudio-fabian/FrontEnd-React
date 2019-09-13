import types from './GitHubRepositoryDescription.types';

const getGitHubRepositoriesDescription = (url) => ({
	type: types.GITHUB_DESCRIPTION_FETCH,
	payload: { url },
});

const receiveGitHubRepositoriesDescription = (repository) => ({
	type: types.RECEIVE_GITHUB_DESCRIPTION,
	payload: { repository },
});

const failedFetchGitHubRepositoriesDescription = (error) => ({
	type: types.GITHUB_DESCRIPTION_FETCH_FAILED,
	message: error.message,
});
export {
	getGitHubRepositoriesDescription,
	receiveGitHubRepositoriesDescription,
	failedFetchGitHubRepositoriesDescription,
};
