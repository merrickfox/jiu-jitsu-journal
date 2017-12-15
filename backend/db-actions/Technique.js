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

export const create = (technique) => {
	const timestamp = new Date().getTime();
	let newTechnique = {...technique};


	newTechnique.id = uuid.v4();
	newTechnique.createdAt = timestamp;
	newTechnique.updatedAt = timestamp;

	const params = {
		TableName: process.env.TECHNIQUE_TABLE,
		Item: newTechnique
	};

	return new Promise((resolve, reject) => {
		dynamodb.put(params, (error) => {
			// handle errors
			if (error) {
				console.error(error);
				reject(new Error('Couldn\'t create'));
				return;
			}
			console.log('created Technique!', params.Item)
			resolve(params.Item);
		});
	})

};

