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