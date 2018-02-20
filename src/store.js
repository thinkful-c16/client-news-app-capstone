import {createStore, applyMiddleware, combineReducers} from 'redux';
import authReducer from './reducers/auth';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
)
const store = createStore(
    combineReducers({
        auth: authReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;