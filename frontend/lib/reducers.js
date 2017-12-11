const init = {
}

export default {
	setDateForAddActivity: (state = init, action) => {
		switch (action.type) {
			case 'SET_DATE_FOR_CREATE_ACTIVITY':
				return Object.assign({}, state, {
					date: action.date
				})
			default:
				return state
		}
	}
}