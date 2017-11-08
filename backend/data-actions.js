import {User, createNewUser, findUser} from './models'
import AWS from 'aws-sdk';




const mapItem = (item) => {
	return item.attrs;

};
const mapItems = (items) => items.map(mapItem);

export const createUser = (args) => {
	const {firstName, lastName} = args;
	return new Promise((resolve, reject) => {
		createNewUser(resolve, reject);

	});
}


export const getUser = (args) => {
	const dynamodb = new AWS.DynamoDB.DocumentClient();
	return new Promise((resolve, reject) => {
		const params = {
			TableName : 'jjj-api-dev-users',
			ProjectionExpression: "id, firstName, lastName",
			FilterExpression: "#address.#thing.#year = :start_yr",
			ExpressionAttributeNames: {
				"#address": "address",
				"#thing": "thing",
				"#year": "year",
			},
			ExpressionAttributeValues: {
				":start_yr": 1982,
			}
		};

		dynamodb.scan(params, (err, data) => {
			if (err) {
				console.log('scan error', err)
				reject(err);
			} else {
				console.log('scan success', data.Items)
				resolve(data.Items);
			}
		});
	});
}