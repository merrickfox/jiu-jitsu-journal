import * as Activity from './db-actions/Activity'
import * as Instructor from './db-actions/Instructor'
import * as Academy from './db-actions/Academy'
import * as Technique from './db-actions/Technique'
import * as User from './db-actions/User'

/*===================================================
USERS
 ===================================================*/
export const getUser = async (args, context) => {
	const user = await User.get(args, context);
	return user;
}

export const addUser = async (args, context) => {
	const user = await User.create(args, context);
	return user;
}

/*===================================================
CLASSES
 ===================================================*/
export const addBjjClass = async (args, context) => {
	const activity = await Activity.create(args, context);
	return activity;
}
/*===================================================
INSTRUCTORS
 ===================================================*/
export const addInstructor = async (args, context) => {
	const instructor = await Instructor.create(args, context);
	return instructor;
}
/*===================================================
ACADEMIES
 ===================================================*/
export const addAcademy = async (args, context) => {
	const academy = await Academy.create(args, context);
	return academy;
}

export const getAcademy = async (args, context) => {
	const academy = await Academy.get(args, context);
	return academy;
}
/*===================================================
TECHNIQUES
 ===================================================*/
export const addTechnique = async (args, context) => {
	const technique = await Technique.create(args, context);
	return technique;
}

