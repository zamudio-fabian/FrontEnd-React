import types from './GitHubRepositoryList.types';

const getGitHubRepositories = () => ({ type: types.GITHUB_REPOSITORIES_FETCH });

const receiveGitHubRepositories = (repositories) => ({
	type: types.RECEIVE_GITHUB_REPOSITORIES,
	payload: { items: repositories },
});

const failedFetchGitHubRepositories = (error) => ({
	type: types.GITHUB_REPOSITORIES_FETCH_FAILED,
	message: error.message,
});
export {
	getGitHubRepositories,
	receiveGitHubRepositories,
	failedFetchGitHubRepositories,
};
