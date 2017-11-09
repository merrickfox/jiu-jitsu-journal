import * as resolvers from "./resolvers";

import { makeExecutableSchema } from 'graphql-tools';

const model = `
	type User {
  	firstName: String
  	lastName: String
  	id: String
	}
	
	type Query {
		# Get user by firstName
		user(firstName: String!): [User]
	}
	
	type Mutation {
		# Set the username of user with id
		createActivity(firstName: String!, lastName: String!): User
	}
	
	schema {
		query: Query,
		mutation: Mutation
	}
`;

const resolver = {
	Query: {
		user (_, {firstName}, context) {
			return resolvers.getUser({firstName});
		}
	},
	Mutation: {
		createActivity (_, {firstName, lastName}) {
			return resolvers.createActivity({firstName, lastName});
		}
	}
}

const schema = makeExecutableSchema({
	typeDefs: [
		model
	],
	resolvers: Object.assign({},
		resolver
	)
})

export default schema;