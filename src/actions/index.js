import { ADD_SYMPTOMS, ADD_SOLUTION } from "../constants/action-types";

export function addSymptoms(payload){
    return { type: ADD_SYMPTOMS, payload };
};

export function addSolution(payload){
    return { type: ADD_SOLUTION, payload};
};