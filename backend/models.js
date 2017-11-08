import Joi from 'joi';
import dynogels from 'dynogels';
import AWS from 'aws-sdk';
import uuid from 'uuid';

const dynamodb = new AWS.DynamoDB.DocumentClient();


export const createNewUser = (resolve, reject) => {
	const timestamp = new Date().getTime();

	const params = {
		TableName: 'jjj-api-dev-users',
		Item: {
			id: uuid.v4(),
			firstName: 'johnny',
			lastName: 'lawrence',
			address: {
				country: 'UK',
				codes: ['1','2','3'],
				thing: {
					is: true,
					year: 1982,
					arr: [{a:'b', c:'d', e: 234, f: 2},{a:'f', c:'3', e: 1, f: 345}]
				}
			},
			createdAt: timestamp,
			updatedAt: timestamp
		}
	};

	dynamodb.put(params, (error) => {
		// handle errors
		if (error) {
			console.error(error);
			reject(new Error('Couldn\'t create'));
			return;
		}
		console.log('created user!', params.Item)
		resolve(params.Item);
	});
}

export const findUser = (resolve, reject) => {
	const params = {
		TableName : 'jjj-api-dev-users',
		ProjectionExpression: "id, firstName, lastName",
		FilterExpression: "#yr = :start_yr",
		ExpressionAttributeNames: {
			"#yr": "firstName",
		},
		ExpressionAttributeValues: {
			":start_yr": 'johnny',
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
}


export const User = dynogels.define('User', {
	hashKey : 'id',
	// add the timestamp attributes (updatedAt, createdAt)
	timestamps : true,

	schema : {
		id   : dynogels.types.uuid(),
		firstName   : Joi.string(),
		lastName    : Joi.string()
	},
	tableName: 'jjj-api-dev-users'
});