import {combineReducers} from 'redux';
import counter from './counter';
import todo from './todo'
import ticket from './ticket'

export default combineReducers({counter,todo,ticket})