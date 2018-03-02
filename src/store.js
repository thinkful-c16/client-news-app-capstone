import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './reducers/auth';
import apiReducer from './reducers/api';
import collectionsReducer from './reducers/collections';
import activityReducer from './reducers/activity';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
)
const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        api: apiReducer,
        collections: collectionsReducer,
        activities: activityReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;