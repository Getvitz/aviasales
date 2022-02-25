import {
  FILTER_ALL,
  FILTER_NOTRANSFER,
  FILTER_ONETRANSFER,
  FILTER_TWOTRANSFER,
  FILTER_THREETRANSFER
} from '../actions/actionTypes'

const defaultState = {
        all: true, 
        notransfer: true, 
        onetransfer: true, 
        twotransfer: true, 
        threetransfer: true
}

const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FILTER_ALL:
      if (state.all) {
        return {
          ...state,
          all: false, 
          notransfer: false, 
          onetransfer: false, 
          twotransfer: false, 
          threetransfer: false
        };
      }
      return {
        ...state,
          all: true,
          notransfer: true,
          onetransfer: true,
          twotransfer: true,
          threetransfer: true,
      };
    case FILTER_NOTRANSFER:
      if (state.notransfer) {
        return {
          ...state,
          notransfer: false, 
          all: false
        };
      }
      return {
        ...state,
        notransfer: true,
        all: false
      };
    case FILTER_ONETRANSFER:
      if (state.onetransfer) {
        return {
          ...state,
          onetransfer: false, 
          all: false
        };
      }
      return {
        ...state,
        onetransfer: true
      };
    case FILTER_TWOTRANSFER:
      if (state.twotransfer) {
        return {
          ...state,
          twotransfer: false, 
          all: false
        };
      }
      return {
        ...state,
         twotransfer: true
      };
    case FILTER_THREETRANSFER:
      if (state.threetransfer) {
        return {
          ...state,
           threetransfer: false, 
           all: false
        };
      }
      return {
        ...state,
         threetransfer: true
      };
    default:
      return state;
  }
};

export default filterReducer;
