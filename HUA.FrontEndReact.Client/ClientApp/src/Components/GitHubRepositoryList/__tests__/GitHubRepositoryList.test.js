import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Chip from '@material-ui/core/Chip';
import GitHubSearchContainer from '../GitHubRepositoryList.container';

configure({ adapter: new Adapter() });

describe('A suite', () => {
	let wrapper;
	const repositoriesMock = [
		{
			id: 28457823,
			name: 'freeCodeCamp',
			html_url:
				'https://github.com/freeCodeCamp/freeCodeCamp',
			stargazers_count: 304628,
		},
	];

	beforeEach(() => {
		wrapper = shallow(
			<GitHubSearchContainer
				repositories={repositoriesMock}
			/>
		);
	});

	it('should render without throwing an error', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('should show almost 1 LisItem', () => {
		const chip = wrapper.find(Chip);
		expect(chip.length).toEqual(1);
	});

	it('should show 1 item with 304628 stars', () => {
		const chip = wrapper.find(Chip);
		expect(chip.props().label).toEqual('304,628');
	});
});
