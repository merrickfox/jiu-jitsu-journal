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

export function openMerrickMessage (text) {
	return {
		type: 'OPEN_MERRICK_MESSAGE',
		text
	}
}

export function closeMerrickMessage () {
	return {
		type: 'CLOSE_MERRICK_MESSAGE'
	}
}

export function setUser (user) {
	return {
		type: 'SET_USER',
		user
	}
}

export function updateBasicDetails (details) {
	return {
		type: 'UPDATE_BASIC_DETAILS',
		details
	}
}

export function userImageUploadedRegister (url) {
	return {
		type: 'USER_AVATAR_UPLOADED_REGISTER',
		url
	}
}

export function removeUser () {
	return {
		type: 'REMOVE_USER'
	}
}