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

export function createAcademyDetails (academyDetails) {
	return {
		type: 'CREATE_ACADEMY_DETAILS',
		academyDetails
	}
}

export function userImageUploadedRegister (user_avatar_url) {
	return {
		type: 'USER_AVATAR_UPLOADED_REGISTER',
		user_avatar_url
	}
}

export function academyImageUploadedRegister (academy_avatar_url) {
	return {
		type: 'ACADEMY_AVATAR_UPLOADED_REGISTER',
		academy_avatar_url
	}
}

export function beltRegister (belt) {
	return {
		type: 'BELT_REGISTER',
		belt
	}
}

export function selectAcademyRegister (id) {
	return {
		type: 'SELECT_ACADEMY_REGISTER',
		id
	}
}

export function showCreateAcademy () {
	return {
		type: 'SHOW_CREATE_ACADEMY',
	}
}

export function removeUser () {
	return {
		type: 'REMOVE_USER'
	}
}