import {getUser, createUser} from "./resolvers";

import { makeExecutableSchema } from 'graphql-tools';

// const {
// 	GraphQLSchema,
// 	GraphQLObjectType,
// 	GraphQLString,
// 	GraphQLNonNull,
// } = require('graphql');
//
// const schema = new GraphQLSchema({
// 	query: new GraphQLObjectType({
// 		name: 'RootQueryType', // an arbitrary name
// 		fields: {
// 			// the query has a field called 'greeting'
// 			greeting: {
// 				// we need to know the user's name to greet them
// 				args: { firstName: { name: 'firstName', type: new GraphQLNonNull(GraphQLString) } },
// 				// the greeting message is a string
// 				type: GraphQLString,
// 				// resolve to a greeting message
// 				resolve: (parent, args) => getGreeting(args.firstName),
// 			},
// 		},
// 	}),
// 	mutation: new GraphQLObjectType({
// 		name: 'RootMutationType', // an arbitrary name
// 		fields: {
// 			addAccount: {
// 				args: {
// 					email: { name: 'email', type: new GraphQLNonNull(GraphQLString) },
// 					name: { name: 'name', type: new GraphQLNonNull(GraphQLString) },
// 				},
// 				type: GraphQLString,
// 				resolve: (parent, args) => createAccount(args.email, args.name),
// 			},
// 		},
// 	}),
// });

const model = `
	type User {
  	# user's username
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
		setUsername(id: ID!, firstName: String!, lastName: String!): User
	}
	
	schema {
		query: Query,
		mutation: Mutation
	}
`;

class User {
	constructor (id, {username, description}) {
		this.id = id
		this.username = username
		this.description = description
	}
}

let inMemoryUser = [
	new User('1', {username: 'toto', description: 'toto description', firstName: 'bob'}),
	new User('2', {username: 'tutu', description: 'tutu description', firstName: 'rob'}),
	new User('3', {username: 'tata', description: 'tata description', firstName: 'pob'})
]

const resolver = {
	Query: {
		user (_, {firstName}) {
			return getUser({firstName});
		}
	},
	Mutation: {
		setUsername (_, {id, username}) {
			let user = inMemoryUser.find(user => user.id === id)
			user.username = username

			return user
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