import { combineReducers } from 'redux';
import formReducer from './formReducer';

//const undoableReducer = undoable(formReducer);

export default combineReducers({
    formState: formReducer
});
