import { ADD_SOLUTION } from '../constants/action-types';

export const removeDuplicatesMiddleware = store => next => action => {
    if(action.type === ADD_SOLUTION) {
       console.log(action.payload.values)
    }
    next(action);
}