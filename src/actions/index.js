import { ADD_SYMPTOMS, ADD_SOLUTION, RESET_APP } from "../constants/action-types";

export function addSymptoms(payload){
    return { type: ADD_SYMPTOMS, payload };
};

export function addSolution(payload){
    return { type: ADD_SOLUTION, payload};
};

export function resetApp(payload) {
    return {type: RESET_APP, payload};
}