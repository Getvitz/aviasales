import {createStore, combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import sortReducer from "./sortReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
    sort: sortReducer,
    filter: filterReducer
})

const store = createStore(rootReducer, composeWithDevTools())

export default store;