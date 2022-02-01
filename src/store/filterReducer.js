const defaulState = {
    all: false,
    notransfer: false,
    onetransfer: false,
    twotransfer: false,
    threetransfer: false,
  }
  
const filterReducer = (state = defaulState, action) => {
    switch (action.type) {
        case "ALL":
            if(state.all) return defaulState;
            return {
                all: true,
                notransfer: true,
                onetransfer: true,
                twotransfer: true,
                threetransfer: true,
        }
        case "NOTRANSFER":
            if(state.notransfer) {return {
                ...state, 
                notransfer: false, 
                all: false
            }};
            return {
                ...state, 
                notransfer: true,
                all: false
            }
        case "ONETRANSFER":
            if(state.onetransfer) {return {
                ...state, 
                onetransfer: false,
                all: false
            }};
            return {
                ...state, onetransfer: true
        }
        case "TWOTRANSFER":
            if(state.twotransfer) {return {
                ...state, 
                twotransfer: false,
                all: false
            }};
            return {
                ...state, twotransfer: true
            }
        case "THREETRANSFER":
            if(state.threetransfer) {return {
                ...state, 
                threetransfer: false,
                all: false
            }};
            return {
                ...state, threetransfer: true
        }
        default:
        return state
    }
  }

export default filterReducer;