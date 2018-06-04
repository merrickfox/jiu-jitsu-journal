import algoliasearch from 'algoliasearch';
const client = algoliasearch('AKABV1FVTA', 'b6c02b8bab61a2826ab967cf25781d15');
const index = client.initIndex('dev_academies');

export const search = async (query) => {
	const response = await index.search(query);
	return response;
}