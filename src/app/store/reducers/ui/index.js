import {combineReducers} from 'redux';
import dialog from './dialog.reducer';

const uiReducers = combineReducers({
    dialog
});

export default uiReducers;
