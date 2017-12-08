import * as Activity from './db-actions/Activity'


export const getUser = (args) => {
	return [];
}

export const addBjjClass = async (args) => {
	const activity = await Activity.create(args);
	console.log(activity);
	return activity;
}