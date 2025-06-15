import { combineReducers } from 'redux';
import { appReducer } from './app-reducer';
import { formReducer } from './form-reducer';
import { themeReducer } from './theme-reducer';
import { userReducer } from './user-reducer';
import { usersReducer } from './users-reducer';

export default combineReducers({
	app: appReducer,
	theme: themeReducer,
	user: userReducer,
	users: usersReducer,
	form: formReducer,
});
