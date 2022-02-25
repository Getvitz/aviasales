import {
  GET_SEARCH_ID,
  GET_TICKETS_DATA,
  STOP_FETCHING,
  ERROR_RECEIVED,
  SHOW_MORE
} from '../actions/actionTypes'

const defaultState = {
    visibleCount: 5,
    ticketsData: [],
    stop: false,
    error: 0,
    searchId: ''
}

const ticketsReducer = (state = defaultState, action) => {
    switch (action.type) {
      case GET_SEARCH_ID:
        return {
          ...state,
          searchId: action.searchId,
        };
      case GET_TICKETS_DATA:
        return {
          ...state,
          ticketsData: [...state.ticketsData, ...action.tickets],
          stop: action.stop,
          error: state.error,
        };
      case STOP_FETCHING:
        return {
          ...state,
          stop: true,
        };
      case ERROR_RECEIVED:
        return {
          ...state,
          error: state.error + 1,
        };
      case SHOW_MORE:
        return {
          ...state,
          visibleCount: state.visibleCount + 5,
        };
      default:
        return state;
    }
  };
  
  export default ticketsReducer;