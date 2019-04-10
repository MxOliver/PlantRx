import { ADD_SYMPTOMS } from '../constants/action-types';

const initialState = {
    symptoms: []
}

export function symptomReducer(state = initialState, action){
    switch (action.type) {
        case ADD_SYMPTOMS:
            return Object.assign({}, state, {
                symptoms: state.symptoms.concat(action.payload)
            });
        default:
            return state
    }
}

export default symptomReducer; 