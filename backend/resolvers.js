import * as Activity from './db-actions/Activity'
import * as Instructor from './db-actions/Instructor'
import * as Academy from './db-actions/Academy'
import * as Technique from './db-actions/Technique'


export const getUser = (args) => {
	return [];
}

export const addBjjClass = async (args) => {
	const activity = await Activity.create(args);
	console.log(activity);
	return activity;
}

export const addInstructor = async (args) => {
	const instructor = await Instructor.create(args);
	console.log(instructor);
	return instructor;
}

export const addAcademy = async (args) => {
	const academy = await Academy.create(args);
	console.log(academy);
	return academy;
}

export const addTechnique = async (args) => {
	const Technique = await Technique.create(args);
	console.log(Technique);
	return Technique;
}