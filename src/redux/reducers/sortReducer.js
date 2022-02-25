import {
  SHOW_CHEAPEST,
  SHOW_OPTIMAL,
  SHOW_FASTEST
} from '../actions/actionTypes'

const defaultState = {
        cheapest: true, 
        fastest: false, 
        optimal: false 
}

const sortReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_CHEAPEST:
      return {
        ...state,
         cheapest: true, 
         fastest: false, 
         optimal: false,
      };
    case SHOW_FASTEST:
      return {
        ...state,
        cheapest: false, 
        fastest: true, 
        optimal: false,
      };
    case SHOW_OPTIMAL:
      return {
        ...state,
        cheapest: false, 
        fastest: false, 
        optimal: true
      };
    default:
      return state;
  }
};

export default sortReducer;
