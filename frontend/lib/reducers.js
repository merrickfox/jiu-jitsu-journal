const init = {}

export default {
	dates: (state = init, action) => {
		switch (action.type) {
			case 'SET_DATE_FOR_CREATE_ACTIVITY':
				return Object.assign({}, state, {
					activity_date: action.date
				})
			default:
				return state
		}
	}
}