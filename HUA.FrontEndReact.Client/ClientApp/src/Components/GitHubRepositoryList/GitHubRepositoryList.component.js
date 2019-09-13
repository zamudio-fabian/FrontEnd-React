import React from 'react';
import { connect } from 'react-redux';
import './GitHubRepositoryList.style.css';
import GitHubSearchContainer from './GitHubRepositoryList.container';
import { getGitHubRepositories } from './GitHubRepositoryList.actions';
import { getGitHubRepositoriesDescription } from '../GitHubRepositoryDescription/GitHubRepositoryDescription.actions';

class GitHubSearch extends React.Component {
	componentDidMount() {
		const { getListRepositories } = this.props;
		getListRepositories();
	}

	render() {
		const { repositories, showDetail } = this.props;
		return (
			<GitHubSearchContainer
				repositories={repositories}
				click={showDetail}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		repositories: state.GitHubStore.repositories,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getListRepositories: () => {
			dispatch(getGitHubRepositories());
		},
		showDetail: (url) => {
			dispatch(getGitHubRepositoriesDescription(url));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GitHubSearch);
