import Joi from 'joi';
import dynogels from 'dynogels';


export const User = dynogels.define('User', {
	hashKey : 'id',
	// add the timestamp attributes (updatedAt, createdAt)
	timestamps : true,

	schema : {
		id   : dynogels.types.uuid(),
		firstName   : Joi.string(),
		lastName    : Joi.string()
	},
	tableName: 'jjj-api-dev-users'
});