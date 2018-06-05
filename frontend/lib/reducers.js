const init = {}

export default {
	register: (state = init, action) => {
		switch (action.type) {
			case 'UPDATE_BASIC_DETAILS':
				return Object.assign({}, state, {
					basic_details: action.details
				})
			case 'USER_AVATAR_UPLOADED_REGISTER':
				return Object.assign({}, state, {
					user_avatar: action.url
				})
			default:
				return state
		}
	},
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
	merrickMessage: (state = init, action) => {
		switch (action.type) {
			case 'OPEN_MERRICK_MESSAGE':
				return Object.assign({}, state, {
					message_text: action.text,
					is_message_open: true
				})
			case 'CLOSE_MERRICK_MESSAGE':
				return Object.assign({}, state, {
					message_text: '',
					is_message_open: false
				})
			default:
				return state
		}
	},
	user: (state = init, action) => {
		switch (action.type) {
			case 'SET_USER':
				return Object.assign({}, state, {
					...action.user,
				})
			case 'REMOVE_USER':
				return Object.assign({}, state, {
					user: null,
				})
			default:
				return state
		}
	}
}