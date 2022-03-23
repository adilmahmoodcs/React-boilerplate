import {combineReducers} from 'redux';
import ui from './ui';
import routes from './routes.reducer';

const createReducer = (asyncReducers) =>
    combineReducers({
        ui,
        routes,
        ...asyncReducers
    });

export default createReducer;
