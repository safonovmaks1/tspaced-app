import { combineReducers } from 'redux';
import { appReducer } from './app-reducer';
import { themeReducer } from './theme-reducer';
import { userReducer } from './user-reducer';
import { usersReducer } from './users-reducer';

export default combineReducers({
	app: appReducer,
	theme: themeReducer,
	user: userReducer,
	users: usersReducer,
});
