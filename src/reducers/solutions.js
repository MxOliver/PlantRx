import { ADD_SOLUTION } from '../constants/action-types';

export function solutionReducer(state = [], action){
    switch (action.type) {
        case ADD_SOLUTION:
            return Object.assign({}, state, {
                solution: state.solution.concat(action.payload)
            });
        default:
            return state;
    }
}

export default solutionReducer;