const API_BASE_URL = 'http://localhost:8080/api'

export const FETCH_COLLECTIONS_REQUEST = "FETCH_COLLECTIONS_REQUEST";
export const fetchCollectionsRequest = () => {
  return {
    type: FETCH_COLLECTIONS_REQUEST,
    loading: true,
    error: null
  }
}

export const FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS";
export const fetchCollectionsSuccess = (collections) => {
  return {
		type: FETCH_COLLECTIONS_SUCCESS,
		loading: false,
		error: null,
		collections
  }
}

export const FETCH_COLLECTIONS_ERROR = "FETCH_COLLECTIONS_ERROR";
export const fetchCollectionsError = (error) => {
	return {
		type: FETCH_COLLECTIONS_ERROR,
		loading: false,
		error
	}
}

export const CREATE_COLLECTION_REQUEST = "CREATE_COLLECTION_REQUEST";
export const createCollectionRequest = () => {
  return {
    type: CREATE_COLLECTION_REQUEST,
    loading: true,
    error: null
  }
}

export const CREATE_COLLECTION_SUCCESS = "CREATE_COLLECTION_SUCCESS";
export const createCollectionSuccess = (collectionName) => {
  return {
		type: CREATE_COLLECTION_SUCCESS,
		loading: false,
		error: null,
		collectionName
  }
}

export const CREATE_COLLECTION_ERROR = "CREATE_COLLECTION_ERROR";
export const createCollectionError = (error) => {
	return {
		type: CREATE_COLLECTION_ERROR,
		loading: false,
		error
	}
}

export const ADD_TO_COLLECTION_REQUEST =
"ADD_TO_COLLECTION_REQUEST";
export const addToCollectionRequest = () => {
	return {
		type: ADD_TO_COLLECTION_REQUEST,
		loading: true,
		error: false
	}
}

export const ADD_TO_COLLECTION_SUCCESS = "ADD_TO_COLLECTION_SUCCESS";
export const addToCollectionSuccess = (article) => {
	return {
		type: ADD_TO_COLLECTION_SUCCESS,
		loading: false,
		article
	}
}

export const ADD_TO_COLLECTION_ERROR = "ADD_TO_COLLECTION_ERROR";
export const addToCollectionError = (error) => {
	return {
		type: ADD_TO_COLLECTION_ERROR,
		loading: false,
		error
	}
}

export const DELETE_COLLECTION_REQUEST = "DELETE_COLLECTION_REQUEST";
export const deleteCollectionRequest = () => {
	return {
		type: DELETE_COLLECTION_REQUEST,
		loading: true,
		error: null
	}
}

export const DELETE_COLLECTION_SUCCESS = "DELETE_COLLECTION_SUCCESS";
export const deleteCollectionSuccess = (collectionId) => {
  return {
		type: DELETE_COLLECTION_SUCCESS,
		loading: false,
		collectionId
	}
}

export const DELETE_COLLECTION_ERROR = "DELETE_COLLECTION_ERROR";
export const deleteCollectionError = (error) => {
	return {
		type: DELETE_COLLECTION_ERROR,
		loading: false,
		error
	}
}

export const fetchCollections = () => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	dispatch(fetchCollectionsRequest());
	fetch(`${API_BASE_URL}/collections`, {
		headers: {
			Authorization: `Bearer ${authToken}`,
			Accept: 'application/json'
		}
	})
	.then (res => {
		if(!res.ok) {
			console.log("There was an issue with your request. Please try again.")
		}
		return res.json();
	})
	.then(data => {
		dispatch(fetchCollectionsSuccess(data.collections));
	})
	.catch(err => {
		dispatch(fetchCollectionsError(err))
	})
};