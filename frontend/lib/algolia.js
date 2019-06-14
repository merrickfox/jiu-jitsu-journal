import algoliasearch from 'algoliasearch';
const client = algoliasearch('QPK7FTMF2N', '3a2f007699f0bcb49dd27292bd0adfc9');
const index = client.initIndex('dev_ACADEMIES');

export const search = async (query) => {
	const response = await index.search(query);
	return response;
}