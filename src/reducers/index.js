import { ADD_SYMPTOMS, ADD_SOLUTION } from '../constants/action-types';

const initialState = {
    symptoms: [],
    solution: []
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SYMPTOMS:
            return Object.assign({}, state, {
                symptoms: state.symptoms.concat(action.payload)
            });
        case ADD_SOLUTION:
            return Object.assign({}, state, {
                solution: state.solution.concat(action.payload)
            });
        default:
            return state
    }
}

export default rootReducer; 