const apiBase = 'https://front-test.beta.aviasales.ru/';

export const getSearchIdSuccess = (searchId) => ({
  type: 'GET_SEARCH_ID',
  searchId,
});

export const getTicketsDataSuccess = (tickets, stop) => ({
  type: 'GET_TICKETS_DATA',
  tickets,
  stop,
});

export const stopFetching = () => {
  return {
    type: 'STOP_FETCHING',
  };
};

export const receiveError = () => ({
  type: 'ERROR_RECEIVED',
});

export const showMore = () => ({ type: 'SHOW_MORE' });

export const getSearchId = () => (dispatch) => {
  return fetch(`${apiBase}search`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }
      return res.json();
    })
    .then((body) => body.searchId)
    .then((searchId) => dispatch(getSearchIdSuccess(searchId)));
};

export const getTicketsData = (searchId) => (dispatch) =>
  fetch(`${apiBase}tickets?searchId=${searchId}`)
    .then((res) => res.json())
    .then(({ tickets, stop }) => {
      if (stop) dispatch(stopFetching());
      else dispatch(getTicketsDataSuccess(tickets, stop));
    })
    .catch(() => dispatch(receiveError()));
