const init = {

}

const init_register = {
		show_create_academy: false,
}

export default {
	register: (state = init_register, action) => {
		switch (action.type) {
			case 'UPDATE_BASIC_DETAILS':
				return Object.assign({}, state, {
					basic_details: action.details
				})
			case 'CREATE_ACADEMY_DETAILS':
				return Object.assign({}, state, {
					new_academy_details: action.academyDetails
				})
			case 'USER_AVATAR_UPLOADED_REGISTER':
				return Object.assign({}, state, {
					user_avatar: action.user_avatar_url
				})
			case 'ACADEMY_AVATAR_UPLOADED_REGISTER':
				return Object.assign({}, state, {
					academy_avatar: action.academy_avatar_url
				})
			case 'SELECT_ACADEMY_REGISTER':
				return Object.assign({}, state, {
					academy_id: action.id
				})
			case 'SHOW_CREATE_ACADEMY':
				return Object.assign({}, state, {
					show_create_academy: !state.show_create_academy
				})
			case 'BELT_REGISTER':
				return Object.assign({}, state, {
					belt: action.belt
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