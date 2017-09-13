import {combineReducers} from 'redux';
import UserReducer from './reducer-users';

const allReducers = combineReducers({
    users: UserReducer
    //movies: MovieReducer - if it exists
});