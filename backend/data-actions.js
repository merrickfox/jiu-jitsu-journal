import {User} from './models'

const mapItem = (item) => {
	return item.attrs;

};
const mapItems = (items) => items.map(mapItem);

export const createUser = (args) => {

}

/* TODO
	change query to return array?
	rewrite that map function for Users model
 */
export const getUser = (args) => {
	console.log('args', args)
	return new Promise((resolve, reject) => {
		User.scan()
			.where('firstName').gte(args.firstName)
			.exec((err, result) => {
				if (err) {
					console.log('err', err);
				} else {
					console.log('loaded result', result);
					resolve(mapItems(result.Items))
				}
			});
	});
}