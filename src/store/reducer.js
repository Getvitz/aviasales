import defaultState from './defaultState';

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_SEARCH_ID':
      return {
        ...state,
        searchId: action.searchId,
      };
    case 'GET_TICKETS_DATA':
      return {
        ...state,
        ticketsData: [...state.ticketsData, ...action.tickets],
        stop: action.stop,
        error: state.error,
      };
    case 'STOP_FETCHING':
      return {
        ...state,
        stop: true,
      };
    case 'ERROR_RECEIVED':
      return {
        ...state,
        error: state.error + 1,
      };
    case 'SHOW_CHEAPEST':
      return {
        ...state,
        sort: { cheapest: true, fastest: false, optimal: false },
      };
    case 'SHOW_FASTEST':
      return {
        ...state,
        sort: { cheapest: false, fastest: true, optimal: false },
      };
    case 'SHOW_OPTIMAL':
      return {
        ...state,
        sort: { cheapest: false, fastest: false, optimal: true },
      };
    case 'FILTER_ALL':
      if (state.filter.all) {
        return {
          ...state,
          filter: { all: false, notransfer: false, onetransfer: false, twotransfer: false, threetransfer: false },
        };
      }
      return {
        ...state,
        filter: {
          all: true,
          notransfer: true,
          onetransfer: true,
          twotransfer: true,
          threetransfer: true,
        },
      };
    case 'FILTER_NOTRANSFER':
      if (state.filter.notransfer) {
        return {
          ...state,
          filter: { ...state.filter, notransfer: false, all: false },
        };
      }
      return {
        ...state,
        filter: { ...state.filter, notransfer: true, all: false },
      };
    case 'FILTER_ONETRANSFER':
      if (state.filter.onetransfer) {
        return {
          ...state,
          filter: { ...state.filter, onetransfer: false, all: false },
        };
      }
      return {
        ...state,
        filter: { ...state.filter, onetransfer: true },
      };
    case 'FILTER_TWOTRANSFER':
      if (state.filter.twotransfer) {
        return {
          ...state,
          filter: { ...state.filter, twotransfer: false, all: false },
        };
      }
      return {
        ...state,
        filter: { ...state.filter, twotransfer: true },
      };
    case 'FILTER_THREETRANSFER':
      if (state.filter.threetransfer) {
        return {
          ...state,
          filter: { ...state.filter, threetransfer: false, all: false },
        };
      }
      return {
        ...state,
        filter: { ...state.filter, threetransfer: true },
      };
    case 'SHOW_MORE':
      return {
        ...state,
        visibleCount: state.visibleCount + 5,
      };
    default:
      return state;
  }
};

export default rootReducer;
