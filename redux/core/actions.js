

// =========== USER ACTIONS =============

export function fetchUsers() {
	return dispatch => {

		dispatch({
			type: 'REQUEST_USERS'
		});

		return fetch('/users')
			.then(res => res.json())
			.then(({ entities }) => dispatch({
				type: 'RECEIVE_USERS',
				entities
			}));
	}
}

export function postUser(user) {
	return dispatch => {

		return fetch('/users', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(user)
		})
		.then(res => res.json())
		.then(user => dispatch({
			type: 'ADD_USER',
			user
		}));
	}
}

export function putUser(user) {
	return dispatch => {
		return fetch('/users', {
			method: 'PUT',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(user)
		})
		.then(res => res.json())
		.then(user => dispatch({
			type: 'EDIT_USER',
			user
		}));
	}
}

export function deleteUser(id) {
	return dispatch => {
		return fetch(`/users/${id}`, { method: 'DELETE' })
			.then(res => res.json())
			.then(user => dispatch({
				type: 'REMOVE_USER',
				user
			}));
	}
} 

// =======================================

// =========== FILTER ACTIONS ============

export function setRatingFilter(rating) {
	return {
		type: 'SET_RATING_FILTER',
		filter: rating
	}
}

export function setGroupFilter(group) {
	return {
		type: 'SET_GROUP_FILTER',
		filter: group
	}
}

export function setSearchQuery(query) {
	return {
		type: 'SET_SEARCH_QUERY',
		query
	}
}

export function setSortField(direction, field) {
	return {
		type: 'SET_SORT_FIELD',
		direction,
		field
	}
}

// ======================================








