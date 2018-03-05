import { API_BASE_URL } from '../config';

export const FETCH_ACTIVITY_REQUEST = "FETCH_ACTIVITY_REQUEST";
export const fetchActivityRequest = () => {
  return {
		type: FETCH_ACTIVITY_REQUEST,
		loading: true,
		error: null
  }
}

export const FETCH_ACTIVITY_SUCCESS = "FETCH_ACTIVITY_SUCCESS";
export const fetchActivitySuccess = (activities) => {
	return {
		type: FETCH_ACTIVITY_SUCCESS,
		loading: false,
		error: null,
		activities
	}
}

export const FETCH_ACTIVITY_ERROR = "FETCH_ACTIVITY_ERROR";
export const fetchActivityError = (error) => {
	return {
		type: FETCH_ACTIVITY_ERROR,
		loading: false,
		error
	}
}

export const shareActivity = (article, channel) => (dispatch, getState) => {
  console.log('share activity running:', article, channel)
  console.log(typeof JSON.stringify({
	  'data1': article,
	  'data2': channel
  }));
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/activities`, {
	method: 'POST',
	headers: {
		Authorization: `Bearer ${authToken}`,
		'Content-type': 'application/json'
		},
	body: JSON.stringify({
		"data1": article,
		"data2": channel
		})	
	})
	.then (res => {
		if(!res.ok) {
			console.log("There was an issue with your request. Please try again.")
		}
		return res.json();
	})
	.catch(err => {
		console.log(err)
	})
}

export const fetchActivities = () => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	dispatch(fetchActivityRequest());
	fetch(`${API_BASE_URL}/activities`, {
		headers: {
			Authorization: `Bearer ${authToken}`,
			Accept: 'application/json'
		}
	})
	.then(res => {
		if(!res.ok) {
			console.log("Sorry, there was an error with your request")
		}
		return res.json();
	})
	.then(data => {
		dispatch(fetchActivitySuccess(data))
	})
	.catch(err => {
		dispatch(fetchActivityError(err))
	})
};
