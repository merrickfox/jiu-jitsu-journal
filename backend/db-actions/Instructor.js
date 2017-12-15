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

export const create = (instructor) => {
	const timestamp = new Date().getTime();
	let newInstructor = {...instructor};


	newInstructor.id = uuid.v4();
	newInstructor.createdAt = timestamp;
	newInstructor.updatedAt = timestamp;

	const params = {
		TableName: process.env.INSTRUCTOR_TABLE,
		Item: newInstructor
	};

	return new Promise((resolve, reject) => {
		dynamodb.put(params, (error) => {
			// handle errors
			if (error) {
				console.error(error);
				reject(new Error('Couldn\'t create'));
				return;
			}
			console.log('created Instructor!', params.Item)
			resolve(params.Item);
		});
	})

};

