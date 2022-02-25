import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import rootReducer from './reducer';
import filterReducer from './reducers/filterReducer';
import ticketsReducer from './reducers/ticketsReducer';
import sortReducer from './reducers/sortReducer';

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  sort: sortReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
