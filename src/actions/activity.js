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
export const fetchActivitySuccess = (activity) => {
	return {
		type: FETCH_ACTIVITY_SUCCESS,
		loading: false,
		error: null,
		activity
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

export const fetchActivities = () => (dispatch) => {
  dispatch(fetchActivityRequest)
}