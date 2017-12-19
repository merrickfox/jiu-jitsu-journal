import * as resolvers from "./resolvers";

import { makeExecutableSchema } from 'graphql-tools';

const model = `
	type User {
  	firstName: String
  	lastName: String
  	id: String
	}
	
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
  	user: String!
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
	}
	
	type Academy {
		id: String
		class_reference_count: Int
		name: String
		address: String
  	postcode: String
  	country: String
  	picture_url: String
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
	# Queries Mutations
	##########################################
	
	
	type Query {
		# Get user by firstName
		user(firstName: String!): [User]
	}
	
	type Mutation {
		addBjjClass(class: BjjClassInput): BjjClass,
		addInstructor(instructor: InstructorInput): Instructor
		addAcademy(academy: AcademyInput): Academy
		addTechnique(technique: TechniqueInput): Technique
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
		user (_, {firstName}, context) {
			return resolvers.getUser({firstName});
		}
	},
	Mutation: {
		addBjjClass (_, data, context) {
			return resolvers.addBjjClass(data.class, context);
		},
		addInstructor (_, data) {
			return resolvers.addInstructor(data.instructor);
		},
		addAcademy (_, data) {
			return resolvers.addAcademy(data.academy);
		},
		addTechnique (_, data) {
			return resolvers.addTechnique(data.technique);
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

const bjjClass = {
	"activity_date": 3452435245,
	"user": "2regrg-2reg2erg-2ergerg",
	"time": 45456456,
	"instructor_id": "2gerg2rg2g-2erg2reg",
	"academy_id": "2gerg2rg2g-2erg2reg",
	"class_length": 90,
	"warmup_time": 15,
	"technique_time": 30,
	"rolling_time": 45,
	"techniques_learned": [
		{
			"id": "234-23-4234-sd",
			"notes": "sdfsdf sdf sdf sdf sdfsdfsdf sdf s"
		}
	],
	"sparring_details": [
		{
			"nemesis_id": "2gerg2rg2g-2erg2reg",
			"techniques_hit": ["2gerg2rg2g-2erg2reg", "2gerg2rg2g-2erg2reg"],
			"techniques_succumbed": ["2gerg2rg2g-2erg2reg", "2gerg2rg2g-2erg2reg"],
			"notes": "sdfsdfsdf asdas dasd asd asdsd"
		},
		{
			"nemesis_id": "2gerg2rg2g-2ergasd2reg",
			"techniques_hit": ["2gerg2rg2g-2erg2reg", "2gerg2rgasd2g-2erg2reg"],
			"techniques_succumbed": ["2gerg2rasdsag2g-2erg2reg", "2gerg2rg2g-2erg2reg"],
			"notes": "sdfsdfsdf asdas dasd asd asasdasd222dsd"
		}
	]
}