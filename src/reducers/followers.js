import * as actions from '../actions/followers';

const initialState = {
  loading: null,
  error: null,
  userResults: []
}

export default function followersReducer(state = initialState, action) {
    if(action.type === actions.FETCH_USERS_REQUEST) {
        return Object.assign({}, state, {
          loading: action.loading
        });
      }
    else if(action.type === actions.FETCH_USERS_SUCCESS) {
        return Object.assign({}, state, {
          loading: action.loading,
          userResults: action.results,
          error: action.error
        });
      }
    else if(action.type === actions.FETCH_USERS_ERROR) {
        return Object.assign({}, state, {
          loading: action.loading,
          error: action.error
        })
    }
  return state;
}