import schema from './schema';
import { graphqlLambda, graphiqlLambda } from "apollo-server-lambda";

module.exports.query = graphqlLambda({ schema });

if (process.env.IS_OFFLINE) {
	module.exports.graphiql = graphiqlLambda({ endpointURL: '/query' });
} else {
	module.exports.graphiql = graphiqlLambda({ endpointURL: '/dev/query' });
}

