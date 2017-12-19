import schema from './schema';
import { graphqlLambda, graphiqlLambda } from "apollo-server-lambda";
import imageUpload from './handlers/image-upload'



module.exports.query = function graphqlHandler(event, context, callback) {
	const tokenParts = event.headers.authorization.split(' ')
	const tokenValue = tokenParts[1];

	if (!tokenValue) {
		let response = {
			statusCode: '401',
			body: JSON.stringify({error: 'No auth token'}),
			headers: {
				'Content-Type': 'application/json',
			}
		};

		context.succeed(response);
	}



	function callbackFilter(error, output) {
		if (false) { // todo reject invalid tokens
			let response = {
				statusCode: '401',
				body: JSON.stringify({ error: 'you messed up!' }),
				headers: {
					'Content-Type': 'application/json',
				}
			};

			context.succeed(response);
		} else {
			output.headers['Access-Control-Allow-Origin'] = '*';
			context.succeed(output);
		}

	}


	const handler = graphqlLambda({ schema, context: {auth: tokenValue}, debug: true });
	return handler( event, context, callbackFilter);
};

if (process.env.IS_OFFLINE) {
	module.exports.graphiql = graphiqlLambda({ endpointURL: '/query' });
} else {
	module.exports.graphiql = graphiqlLambda({ endpointURL: '/dev/query' });
}

module.exports.imageUpload = imageUpload;

