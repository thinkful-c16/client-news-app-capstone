import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './reducers/auth';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
)
const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;