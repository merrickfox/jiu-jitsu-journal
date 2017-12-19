export function setDateForAddActivity (date) {
	return {
		type: 'SET_DATE_FOR_CREATE_ACTIVITY',
		date
	}
}

export function openToast (text) {
	return {
		type: 'OPEN_TOAST',
		text
	}
}

export function closeToast () {
	return {
		type: 'CLOSE_TOAST'
	}
}

export function setUser (user) {
	return {
		type: 'SET_USER',
		user
	}
}

export function removeUser () {
	return {
		type: 'REMOVE_USER'
	}
}