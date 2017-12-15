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

export const create = (academy) => {
	const timestamp = new Date().getTime();
	let newAcademy = {...academy};


	newAcademy.id = uuid.v4();
	newAcademy.createdAt = timestamp;
	newAcademy.updatedAt = timestamp;

	const params = {
		TableName: process.env.ACADEMY_TABLE,
		Item: newAcademy
	};

	return new Promise((resolve, reject) => {
		dynamodb.put(params, (error) => {
			// handle errors
			if (error) {
				console.error(error);
				reject(new Error('Couldn\'t create'));
				return;
			}
			console.log('created Academy!', params.Item)
			resolve(params.Item);
		});
	})

};

