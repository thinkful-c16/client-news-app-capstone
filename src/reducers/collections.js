import * as actions from '../actions/collections';

const initialState = {
	loading: null,
	error: null,
  collections: []
}

export default function collectionsReducer(state=initialState, action) {
  if(action.type === actions.FETCH_COLLECTIONS_REQUEST) {
		return Object.assign({}, state, {
			loading: action.loading
		});
	}
	else if(action.type === actions.FETCH_COLLECTIONS_SUCCESS) {
		return Object.assign({}, state, {
			loading: action.loading,
			collections: action.collections,
			error: action.error
		});
	}
	else if(action.type === actions.FETCH_COLLECTIONS_ERROR) {
		return Object.assign({}, state, {
			loading: action.loading,
			error: action.error
		});
	}
	return state;
}