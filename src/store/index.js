import { createStore, applyMiddleware } from "redux";
import { removeDuplicatesMiddleware } from '../middleware/removeDuplicates';
import appReducer from '../reducers/index';

const store = createStore(
    appReducer,
    applyMiddleware(removeDuplicatesMiddleware)
);

export default store;