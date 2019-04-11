import { ADD_SYMPTOMS, ADD_SOLUTION, RESET_APP } from '../constants/action-types';

const initialState = {
    symptoms: [],
    solution: []
}

export function appReducer(state = initialState, action) {
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

export function rootReducer(state, action) {
    if(action.type === RESET_APP){
        state = undefined;
        console.log(action.payload);
    }

    return appReducer(state, action);
}

export default rootReducer; 