export const SET_POSITION = "SET_POSITION";
export function setPosition(position) {
	return {
		type: SET_POSITION,
		position
	};
}

export const SET_DOMINANCE = "SET_DOMINANCE";
export function setDominance(dominance) {
	return {
		type: SET_DOMINANCE,
		dominance
	};
}

export const SET_TECHNIQUE_TYPE = "SET_TECHNIQUE_TYPE";
export function setTechniqueType(technique_type) {
	return {
		type: SET_TECHNIQUE_TYPE,
		technique_type
	};
}

export const SET_POSITION_STAGE = "SET_POSITION_STAGE";
export function setPositionStage(stage) {
	return {
		type: SET_POSITION_STAGE,
		stage
	};
}