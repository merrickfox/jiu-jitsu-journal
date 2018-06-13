import AWS from 'aws-sdk';
import uuid from 'uuid';
import algoliasearch from 'algoliasearch';
import {addToIndex} from '../lib/algolia';


const client = algoliasearch('AKABV1FVTA', 'badb5e88dcc1d1af3f2f70aa9a94b81a');
const academyIndex = client.initIndex(process.env.ALGOLIA_ACADEMY_INDEX);

let dynamodb;
if (process.env.IS_OFFLINE) {
	dynamodb = new AWS.DynamoDB.DocumentClient({
		region: 'localhost',
		endpoint: 'http://localhost:3333'
	})
} else {
	dynamodb = new AWS.DynamoDB.DocumentClient();
}

export const create = (academy) => {
	const timestamp = new Date().getTime();
	let newAcademy = {...academy};


	newAcademy.id = uuid.v4();
	newAcademy.createdAt = timestamp;
	newAcademy.updatedAt = timestamp;

	const params = {
		TableName: process.env.ACADEMY_TABLE,
		Item: newAcademy,
		ReturnValues: 'NONE'
	};

	return new Promise((resolve, reject) => {
		dynamodb.put(params, (error, data) => {
			// handle errors
			if (error) {
				console.error(error);
				reject(new Error('Couldn\'t create'));
				return;
			}
			console.log('created Academy!', data);
			addToIndex(academyIndex, [newAcademy]);
			resolve({id: newAcademy.id});
		});
	})

};

export function get (args, context) {
	console.log('get academy args:',args)
	console.log('get academy context:',context)

	const params = {
		TableName: process.env.ACADEMY_TABLE,
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

