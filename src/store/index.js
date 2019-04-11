import { createStore, applyMiddleware } from "redux";
import { removeDuplicatesMiddleware } from '../middleware/removeDuplicates';
import rootReducer from '../reducers/index';

const store = createStore(
    rootReducer,
    applyMiddleware(removeDuplicatesMiddleware)
);

export default store;