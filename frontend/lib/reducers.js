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
	},
	toast: (state = init, action) => {
		switch (action.type) {
			case 'OPEN_TOAST':
				return Object.assign({}, state, {
					toast_text: action.text,
					is_toast_open: true
				})
			case 'CLOSE_TOAST':
				return Object.assign({}, state, {
					toast_text: '',
					is_toast_open: false
				})
			default:
				return state
		}
	},
	user: (state = init, action) => {
		switch (action.type) {
			case 'SET_USER':
				return Object.assign({}, state, {
					userName: action.user,
				})
			case 'REMOVE_USER':
				return Object.assign({}, state, {
					userName: null,
				})
			default:
				return state
		}
	}
}