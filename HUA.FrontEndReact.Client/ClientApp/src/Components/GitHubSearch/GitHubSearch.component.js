import React from 'react';
import Grid from '@material-ui/core/Grid';
import GitHubRepositorylist from '../GitHubRepositoryList/GitHubRepositoryList.component';
import GitHubRepositoryDescription from '../GitHubRepositoryDescription';
import './GitHubSearch.style.css';

class GitHubSearch extends React.Component {
	render() {
		return (
			<Grid container className="h100">
				<Grid
					item
					md={4}
					className="github-repository-list scroll-section">
					<GitHubRepositorylist />
				</Grid>
				<Grid
					item
					md={8}
					className="github-repository-data scroll-section">
					<GitHubRepositoryDescription />
				</Grid>
			</Grid>
		);
	}
}

export default GitHubSearch;
