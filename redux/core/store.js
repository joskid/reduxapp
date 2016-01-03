
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const parseGroupFilter = value => {
	if(value == '-') return '-';
	return value == 'yes';
}

const initialFilterState = {
	rating: '-',
	group: '-',
	query: ''
}

const initialUsersState = {
	isFetching: false,
	error: null,
	entities: []
}

const initialSortState = {
	direction: null,
	field: ''
}

const user = (state, action) => {
	switch(action.type) {
		case 'ADD_USER':
			return [...state, action.user];
		case 'EDIT_USER':
			return state.map(u => {
				if (u.id !== action.user.id) return u;
				return Object.assign({}, action.user);
			})
		case 'REMOVE_USER':
			return state.filter(u => u.id !== action.user.id);
		default:
			return state;	
	}
}

const users = (state = initialUsersState, action) => {
	switch(action.type) {
		case 'REQUEST_USERS':
			return Object.assign({}, state, { isFetching: true });
		case 'RECEIVE_USERS':
			return Object.assign({}, state, {
				isFetching: false,
				entities: action.entities
			});
		case 'ADD_USER':
		case 'EDIT_USER':
		case 'REMOVE_USER':
			return Object.assign({}, state, {entities: user(state.entities, action)});
		default:
			return state;

	}
}


const filters = (state = initialFilterState, action) => {
	switch(action.type) {
		case 'SET_RATING_FILTER':
			return Object.assign({}, state, { rating: action.filter });
		case 'SET_GROUP_FILTER':
			return Object.assign({}, state, { group: parseGroupFilter(action.filter) });	
		case 'SET_SEARCH_QUERY':
			return Object.assign({}, state, { query: action.query });
		default: 
			return state;
	}
}

const sortField = (state = initialSortState, action) => {
	switch(action.type) {
		case 'SET_SORT_FIELD':
			return Object.assign({}, {
				direction: action.direction,
				field: action.field
			});
		default:
			return state;
	}
}

const app = combineReducers({
	filters,
	sortField,
	users
});

const applyStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = applyStoreWithMiddleware(app);

export default store;
