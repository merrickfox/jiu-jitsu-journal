import * as actions from '../actions/position'

export const initialState = {
	position: null,
	dominance: null,
	technique_type: null,
	stage: 1
}


export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.SET_POSITION:
			return Object.assign({}, state, { position: action.position })
		case actions.SET_DOMINANCE:
			return Object.assign({}, state, { dominance: action.dominance })
		case actions.SET_TECHNIQUE_TYPE:
			return Object.assign({}, state, { technique_type: action.technique_type })
		case actions.SET_POSITION_STAGE:
			return Object.assign({}, state, { stage: action.stage })
		default: return state
	}
}
