import { combineReducers } from 'redux';
import usuariosReducer from './usuariosReducer';
import blogReducer from './prueba';

export default combineReducers({
	usuariosReducer,
	blogReducer
});