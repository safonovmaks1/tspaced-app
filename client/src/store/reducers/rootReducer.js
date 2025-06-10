import { combineReducers } from 'redux';
import { appReducer } from './app-reducer';
import { themeReducer } from './theme-reducer';

export default combineReducers({
	app: appReducer,
	theme: themeReducer,
});
