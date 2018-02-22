//import API_BASE_URL from '';
const API_BASE_URL = 'http://localhost:8080/api'

export const FETCH_TOP_HEADLINES_REQUEST = "FETCH_TOP_HEADLINES_REQUEST";
export const fetchTopHeadlinesRequest = () => {
  return {
    type: FETCH_TOP_HEADLINES_REQUEST,
    loading: true,
    error: null
  }
}

export const FETCH_TOP_HEADLINES_SUCCESS = "FETCH_TOP_HEADLINES_SUCCESS";
export const fetchTopHeadlinesSuccess = (headlines) => {
  return {
    type: FETCH_TOP_HEADLINES_SUCCESS,
    loading: false,
    error: null,
    headlines
  }
}

export const FETCH_TOP_HEADLINES_ERROR = "FETCH_TOP_HEADLINES_ERROR";
export const fetchTopHeadlinesError = (error) => {
  return {
    type: FETCH_TOP_HEADLINES_ERROR,
    loading: false,
    error
  }
}

export const fetchTopHeadlines = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchTopHeadlinesRequest());
  fetch(`${API_BASE_URL}/top20`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
      Accept: 'application/json'
    }
  })
  .then(res => {
    if(!res.ok) {
      console.log("There was an issue with your request.")
    }
    return res.json(); 
    })
  .then(headlines => {
    //console.log(headlines);
    dispatch(fetchTopHeadlinesSuccess(headlines.articles));
  })
  .catch(err => {
    dispatch(fetchTopHeadlinesError(err))
  })
};

export const updateHeadlines = (query) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchTopHeadlinesRequest());
  return fetch(`${API_BASE_URL}/qSearch`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
     'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      searchTerm: query
    })
  })
  .then(res => {
    if(!res.ok) {
      console.log("There was an issue with your request.")
    }
    return res.json(); 
    })
  .then(headlines => {
    console.log('anything?', headlines);
    dispatch(fetchTopHeadlinesSuccess(headlines.articles));
  })
  .catch(err => {
    dispatch(fetchTopHeadlinesError(err))
  })
}