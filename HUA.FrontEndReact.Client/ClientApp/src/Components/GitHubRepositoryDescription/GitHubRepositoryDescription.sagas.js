import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import types from './GitHubRepositoryDescription.types';
import {
	receiveGitHubRepositoriesDescription,
	failedFetchGitHubRepositoriesDescription,
} from './GitHubRepositoryDescription.actions';
import GirHubService from '../../Services/GitHubService';

function* fetchRepositoryDescriptionHandle(action) {
	try {
		const repositoryDescription = yield call(
			GirHubService.getRepositoriesDescription,
			action.payload.url
		);
		yield put(
			receiveGitHubRepositoriesDescription(
				repositoryDescription
			)
		);
	} catch (error) {
		yield put(failedFetchGitHubRepositoriesDescription(error));
	}
}

const getRepositoryDescriptionSaga = function* getRepositoryDescriptionSaga() {
	yield takeLatest(
		types.GITHUB_DESCRIPTION_FETCH,
		fetchRepositoryDescriptionHandle
	);
};

// SAGAS PERFORMANCE https://github.com/redux-saga/redux-saga/issues/160
export default function* GitHubDescriptionSagas() {
	yield all([fork(getRepositoryDescriptionSaga)]);
}
