const defaultState = {
    visibleCount: 5,
    ticketsData: [],
    stop: false,
    sort: { cheapest: true, fastest: false, optimal: false },
    filter: { all: false, notransfer: false, onetransfer: false, twotransfer: false, threetransfer: false, },  
    error: 0,
  };

export default defaultState;