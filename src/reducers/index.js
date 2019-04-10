import { combineReducers } from 'redux'
import symptomReducer from './symptomReducer';
import solutionReducer from './solutions';

const rootReducer = combineReducers({
    symptomReducer, solutionReducer
});

export default rootReducer; 