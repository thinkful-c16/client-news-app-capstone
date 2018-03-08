import * as actions from '../actions/api';

const initialState = {
  loading: false,
  error: null,
  headlines: []
}

export default function updateHeadlines(state=initialState, action) {
  if(action.type === actions.FETCH_TOP_HEADLINES_REQUEST) {
    return Object.assign({}, state, {
      loading: action.loading
    });
  }
  else if(action.type === actions.FETCH_TOP_HEADLINES_SUCCESS) {
    return Object.assign({}, state, {
      loading: action.loading,
      headlines: action.headlines,
      error: action.error
    });
  }
  else if(action.type === actions.FETCH_TOP_HEADLINES_ERROR) {
    return Object.assign({}, state, {
      loading: action.loading,
      error: action.error
    })
  }
  return state;
}