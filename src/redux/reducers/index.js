import { combineReducers } from 'redux';
import users from './users';
import marked from './marked';

const rootReducer = combineReducers({
    users,
    marked
});

export default rootReducer;