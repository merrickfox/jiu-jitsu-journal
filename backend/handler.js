import schema from './schema';
import { graphqlLambda, graphiqlLambda } from "apollo-server-lambda";

module.exports.query = graphqlLambda({ schema });
module.exports.graphiql = graphiqlLambda({ endpointURL: '/dev/query' });
