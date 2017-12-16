import AWS from 'aws-sdk';
import uuid from 'uuid';

const s3 = new AWS.S3();

export default async (event, context, callback) => {
	const body = JSON.parse(event.body);

	const buffer = new Buffer(body.image.replace(/^data:image\/\w+;base64,/, ""),'base64')
	const s3Response = await upload(buffer);
	console.log(s3Response)
	const response = {
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Origin" : "*"
		},
		body: JSON.stringify({s3Response})
	};

	callback(null, response);
}

function upload(image) {
	const name = uuid.v4();
	const params = {
		Body: image,
		Bucket: "jjj-images",
		Key: `${name}.jpg`,
		ACL: 'public-read',
		ContentEncoding: 'base64',
		ContentType: 'image/jpeg'
	};
	return s3.upload(params).promise()
}

