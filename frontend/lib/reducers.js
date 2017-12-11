const init = {
	date: 'yolo'
}

export default {
	setDate: (state = init, action) => {
		switch (action.type) {
			case 'SET_DATE':
				return Object.assign({}, state, {
					date: action.date
				})
			default:
				return state
		}
	}
}