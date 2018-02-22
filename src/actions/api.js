//import API_BASE_URL from '';
const API_BASE_URL = 'http://localhost:3000/api'

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

export const fetchTopHeadlines = () => dispath => {
  dispath(fetchTopHeadlinesRequest());
  fetch(`${API_BASE_URL}/top20`)
  .then(res => {
    if(!res.ok) {
      console.log("There was an issue with your request.")
    }
    return res.json(); 
    })
  .then(headlines => {
    dispath(fetchTopHeadlinesSuccess(headlines));
  })
  .catch(err => {
    dispath(fetchTopHeadlinesError(err))
  })
};