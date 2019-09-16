import httpClient from '../lib/httpClient';

const getRepositoriesList = async () => {
	const res = await httpClient.get(
		'https://api.github.com/search/repositories?q=stars:%3E=10000&sort=stars&order=desc'
	);
	return res.data.items;
};

const getReadme = async (owner, repo) => {
	const res = await httpClient.get(
		`https://api.github.com/repos/${owner}/${repo}/readme`
	);
	return window.atob(res.data.content);
};

const getRepositoriesDescription = async (url) => {
	const res = await httpClient.get(url);
	const readme = await getReadme(res.data.owner.login, res.data.name);
	res.data.decodeContent = readme;
	return res.data;
};
export default { getRepositoriesList, getRepositoriesDescription };
