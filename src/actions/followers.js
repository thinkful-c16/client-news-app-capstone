import { API_BASE_URL } from '../config';

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
    loading: true,
    error: null
  }
}

export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const fetchUsersSuccess = (results) => {
  return {
    type: FETCH_USERS_SUCCESS,
    loading: false,
    error: null,
    results
  }
}

export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";
export const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    loading: false,
    error
  }
}

export const fetchUsersByQuery = (query) => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	dispatch(fetchUsersRequest());
	fetch(`${API_BASE_URL}/users/search`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${authToken}`,
			'Content-type': 'application/json'
		},
		body: JSON.stringify({
			term: query
		})
	})
	.then (res => {
		if(!res.ok) {
			console.log("There was an issue with your request. Please try again.")
		}
		return res.json();
	})
	.then(results => {
		console.log(results);
    dispatch(fetchUsersSuccess(results));
  })
	.catch(err => {
    dispatch(fetchUsersError(err))
  })
}