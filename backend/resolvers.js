import * as data from './data-actions'

const promisify = foo => new Promise((resolve, reject) => {
	foo((error, result) => {
		if (error) {
			reject(error);
		} else {
			resolve(result);
		}
	});
});

export const getUser = (args) => {
	return data.getUser(args);
}

export const createUser = (args) => {
	return data.createUser(args);
}