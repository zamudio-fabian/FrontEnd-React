import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import types from './GitHubRepositoryList.types';
import {
	receiveGitHubRepositories,
	failedFetchGitHubRepositories,
} from './GitHubRepositoryList.actions';
import GirHubService from '../../Services/GitHubService';

function* fetchRepositoriesListHandle() {
	try {
		const repositories = yield call(
			GirHubService.getRepositoriesList
		);
		yield put(receiveGitHubRepositories(repositories));
	} catch (error) {
		yield put(failedFetchGitHubRepositories(error));
	}
}

const getRepositoriesListSaga = function* getRepositoriesListSaga() {
	yield takeLatest(
		types.GITHUB_REPOSITORIES_FETCH,
		fetchRepositoriesListHandle
	);
};

// SAGAS PERFORMANCE https://github.com/redux-saga/redux-saga/issues/160
export default function* GitHubSagas() {
	yield all([fork(getRepositoriesListSaga)]);
}
