import * as actions from '../actions/activity';

const initialState = {
    loading: false,
    error: null,
    activities: []
}

export default function activityReducer(state = initialState, action) {
  if(action.type === actions.FETCH_ACTIVITY_REQUEST) {
		return Object.assign({}, state, {
			loading: action.loading
		});
	}
	else if(action.type === actions.FETCH_ACTIVITY_SUCCESS) {
		return Object.assign({}, state, {
			loading: action.loading,
			activities: action.activities,
			error: action.error
		});
	}
	else if(action.type === actions.FETCH_ACTIVITY_ERROR) {
		return Object.assign({}, state, {
			loading: action.loading,
			error: action.error
		});
	}
	return state;
}