import {
    GET_SEARCH_ID,
    GET_TICKETS_DATA,
    STOP_FETCHING,
    ERROR_RECEIVED,
    SHOW_MORE
  } from './actionTypes'

export const getSearchIdSuccess = (searchId) => ({
    type: GET_SEARCH_ID,
    searchId,
  });
  
export const getTicketsDataSuccess = (tickets, stop) => ({
    type: GET_TICKETS_DATA,
    tickets,
    stop,
  });
  
export const stopFetching = () => {
    return {
      type: STOP_FETCHING,
    };
  };
  
export const receiveError = () => ({
    type: ERROR_RECEIVED,
  });
  
export const showMore = () => ({ type: SHOW_MORE });