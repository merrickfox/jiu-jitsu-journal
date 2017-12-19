let dynamodb;
if (process.env.IS_OFFLINE) {
	dynamodb = new AWS.DynamoDB.DocumentClient({
		region: 'localhost',
		endpoint: 'http://localhost:3333'
	})
} else {
	dynamodb = new AWS.DynamoDB.DocumentClient();
}

import AWS from 'aws-sdk';
import uuid from 'uuid';
import getUser from '../lib/auth'

export async function create (activity, context) {

	const user = await getUser(context.auth);

	const timestamp = new Date().getTime();
	let newActivity = {...activity};

	newActivity.id = uuid.v4();
	newActivity.user = user.sub;
	newActivity.createdAt = timestamp;
	newActivity.updatedAt = timestamp;

	const params = {
		TableName: process.env.ACTIVITIES_TABLE,
		Item: newActivity
	};

	return new Promise((resolve, reject) => {
		dynamodb.put(params, (error, data) => {
			// handle errors
			if (error) {
				console.error(error);
				reject(new Error('Couldn\'t create'));
				return;
			}
			resolve(data.Item);
		});
	})

};

