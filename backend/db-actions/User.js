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
import getUser from '../lib/auth'

export async function create (_user, context) {
	const timestamp = new Date().getTime();
	//const user = await getUser(context.auth);

	let newUser = {..._user};


	//newUser.id = user.sub; change this back
	newUser.id = 'sdfsdfsdfsdf'; // change this back
	newUser.createdAt = timestamp;
	newUser.updatedAt = timestamp;
	console.log('new user', newUser)
	console.log('args', _user)
	const params = {
		TableName: process.env.USER_TABLE,
		Item: newUser
	};

	return new Promise((resolve, reject) => {
		dynamodb.put(params, (error) => {
			// handle errors
			if (error) {
				console.error(error);
				reject(new Error('Couldn\'t create'));
				return;
			}
			console.log('created User!', params.Item)
			resolve(params.Item);
		});
	})

};

export async function get (args, context) {
	//const user = await getUser(context.auth);
	console.log('user args passed in:',args)
	console.log('user context passed in:',context)

	const params = {
		TableName: process.env.USER_TABLE,
		KeyConditionExpression: 'id = :hkey',
		ExpressionAttributeValues: {
			':hkey': args.id,
		}
	};

	return new Promise((resolve, reject) => {
		dynamodb.query(params, (error, data) => {
			// handle errors
			if (error) {
				console.error(error);
				reject(error);
				return;
			}
			console.log('data', data)
			if (data.Items.length > 0) resolve(data.Items[0])
			else resolve(null)
		});
	})

};

