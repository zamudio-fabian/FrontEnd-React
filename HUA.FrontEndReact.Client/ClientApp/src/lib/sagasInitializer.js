import { all } from 'redux-saga/effects';
import { Sagas as GitHubSagas } from '../Components/GitHubRepositoryList';
import { Sagas as GitHubDescriptionSagas } from '../Components/GitHubRepositoryDescription';

export default function* initializeSagas() {
	yield all([GitHubSagas(), GitHubDescriptionSagas()]);
}
