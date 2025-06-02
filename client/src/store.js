import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import {
	appReducer,
	postReducer,
	postsReducer,
	themeReducer,
	userReducer,
	usersReducer,
} from './reducers';

const reducer = combineReducers({
	app: appReducer,
	theme: themeReducer,
	user: userReducer,
	users: usersReducer,
	post: postReducer,
	posts: postsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(reducer, enhancer);
