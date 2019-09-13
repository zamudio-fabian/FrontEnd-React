import React from 'react';
import { storiesOf } from '@storybook/react';
import GitHubSearchContainer from './GitHubRepositoryList.container';

const dommyRepositoryList = [
	{
		id: 28457823,
		name: 'freeCodeCamp',
		html_url: 'https://github.com/freeCodeCamp/freeCodeCamp',
		stargazers_count: 304628,
	},
];

storiesOf('GitHubSearchContainer', module)
	.add('without list', () => <GitHubSearchContainer repositories={[]} />)
	.add('with list', () => (
		<GitHubSearchContainer repositories={dommyRepositoryList} />
	));
