import schema from './schema';
import { graphqlLambda, graphiqlLambda } from "apollo-server-lambda";
import imageUpload from './handlers/image-upload'



module.exports.query = function graphqlHandler(event, context, callback) {
	function callbackFilter(error, output) {
		output.headers['Access-Control-Allow-Origin'] = '*';
		context.succeed(output);
	}

	const handler = graphqlLambda({ schema, debug: true });
	return handler( event, context, callbackFilter);
};

if (process.env.IS_OFFLINE) {
	module.exports.graphiql = graphiqlLambda({ endpointURL: '/query' });
} else {
	module.exports.graphiql = graphiqlLambda({ endpointURL: '/dev/query' });
}

module.exports.imageUpload = imageUpload;

