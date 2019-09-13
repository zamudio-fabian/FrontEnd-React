import React from 'react';
import { connect } from 'react-redux';
import GitHubSearchDescriptionContainer from './GitHubRepositoryDescription.container';

class GitHubSearch extends React.Component {
	render() {
		const { repository, fetching } = this.props;
		return (
			<GitHubSearchDescriptionContainer
				repository={repository}
				loading={fetching}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		repository: state.GitHubDescriptionStore.repository,
		fetching: state.GitHubDescriptionStore.fetchingRepository,
	};
};

const mapDispatchToProps = () => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GitHubSearch);
