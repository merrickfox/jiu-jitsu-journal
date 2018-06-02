import * as resolvers from "./resolvers";

import { makeExecutableSchema } from 'graphql-tools';

const model = `
	
	##########################################
	# S&C
	##########################################
	
	type StrengthAndConditioning {
		id: String
	}
	
	##########################################
	# Yoga
	##########################################
	
	type Yoga {
		id: String
	}
	
	##########################################
	# Comp
	##########################################
	
	type Competition {
		id: String
	}
	
	
	##########################################
	# BJJ Class
	##########################################
	
	input LearnedTechniqueInput {
		id: String
		notes: String
	}
	
	input SparringDetailsInput {
		nemesis_id: String
		techniques_hit: [String]
		techniques_succumbed: [String]
		notes: String
	}
	
	type LearnedTechnique {
		id: String
		notes: String
	}
	
	type SparringDetails {
		nemesis_id: String
		techniques_hit: [String]
		techniques_succumbed: [String]
		notes: String
	}
	
	input BjjClassInput {
  	activity_date: Int!
		time: Int!
		instructor_id: String!
		academy_id: String!
		class_length: Int!
		warmup_time: Int!
		technique_time: Int!
		rolling_time: Int!
		techniques_learned: [LearnedTechniqueInput]
		sparring_details: [SparringDetailsInput]
	}
	
	type BjjClass {
		type: String
		id: String
  	activity_date: Int
  	user: String
		time: Int
		instructor_id: String
		academy_id: String
		class_length: Int
		warmup_time: Int
		technique_time: Int
		rolling_time: Int
		techniques_learned: [LearnedTechnique]
		sparring_details: [SparringDetails]
	}
	
	##########################################
	# Instructor
	##########################################
	
	input InstructorInput {
  	first_name: String
  	last_name: String
  	academy: String
  	picture_url: String
	}
	
	type Instructor {
		id: String
		class_reference_count: Int
		first_name: String
  	last_name: String
  	academy: String
  	picture_url: String
	}
	
	##########################################
	# Academy
	##########################################
	
	input AcademyInput {
  	name: String
  	postcode: String
  	address: String
  	country: String
  	picture_url: String
  	url: String
	}
	
	type Academy {
		id: String
		class_reference_count: Int
		name: String
		address: String
  	postcode: String
  	country: String
  	picture_url: String
  	url: String
	}
	
	##########################################
	# Technique
	##########################################
	
	input TechniqueInput {
  	name: String
  	type: String
  	video_url: String
	}
	
	type Technique {
		id: String
		name: String
  	type: String
  	video_url: String
		hit_reference_count: Int
	}
	
	##########################################
	# User
	##########################################
	
	input UserInput {
  	first_name: String! 
  	last_name: String! 
  	email: String! 
  	academy_id: String! 
  	country: String! 
  	belt: String! 
  	avatar_url: String! 
  	is_instructor: Boolean! 
	}
	
	type User {
		id: String
		first_name: String 
  	last_name: String 
  	email: String 
  	academy_id: String 
  	country: String 
  	belt: String 
  	avatar_url: String 
  	is_instructor: Boolean 
	}
	
	##########################################
	# Queries Mutations
	##########################################
	
	
	type Query {
		# Get user by firstName
		user(id: String!): User
	}
	
	type Mutation {
		addBjjClass(class: BjjClassInput): BjjClass,
		addInstructor(instructor: InstructorInput): Instructor
		addAcademy(academy: AcademyInput): Academy
		addTechnique(technique: TechniqueInput): Technique
		addUser(user: UserInput): User
	}
	
	##########################################
	# Schema
	##########################################
	
	schema {
		query: Query,
		mutation: Mutation
	}
`;

const resolver = {
	Query: {
		user (_, id, context) {
			return resolvers.getUser(id, context);
		}
	},
	Mutation: {
		addBjjClass (_, data, context) {
			return resolvers.addBjjClass(data.class, context);
		},
		addInstructor (_, data, context) {
			return resolvers.addInstructor(data.instructor, context);
		},
		addAcademy (_, data, context) {
			return resolvers.addAcademy(data.academy, context);
		},
		addTechnique (_, data, context) {
			return resolvers.addTechnique(data.technique, context);
		},
		addUser (_, data, context) {
			return resolvers.addUser(data.technique, context);
		},
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
