const dynamodb = new AWS.DynamoDB.DocumentClient();
import AWS from 'aws-sdk';
import uuid from 'uuid';

export const create = (activity) => {
	const timestamp = new Date().getTime();
	let newActivity = {...activity};


	newActivity.id = uuid.v4();
	newActivity.createdAt = timestamp;
	newActivity.updatedAt = timestamp;

	console.log('newActivity:', newActivity);

	const params = {
		TableName: process.env.ACTIVITIES_TABLE,
		Item: newActivity
	};

	return new Promise((resolve, reject) => {
		dynamodb.put(params, (error) => {
			// handle errors
			if (error) {
				console.error(error);
				reject(new Error('Couldn\'t create'));
				return;
			}
			console.log('created Activity!', params.Item)
			resolve(params.Item);
		});
	})

};

// messing around with models

const sparringDetailsExample = {
	nemesis: 334, //id
	techniques_hit: [123, 3222, 312], //ids
	techniques_succumbed: [443, 4432, 2], //ids,
	notes: 'some notes'
}

const techniquesLearnedExample = {
	technique_id: 123,
	notes: 'some notes',
}

const bjjClassExample = {
	time: '13:00',
	type: 'bjj-class',
	instructor_id: 123,
	academy_id: 321,
	class_length: 90,
	warmup_time: 20, //minutes
	technique_time: 40,
	rolling_time: 30,
	techniques_learned: [techniquesLearnedExample],
	sparring_details: [sparringDetailsExample]
}

