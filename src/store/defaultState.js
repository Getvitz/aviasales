const defaultState = {
  visibleCount: 5,
  ticketsData: [],
  stop: false,
  sort: { cheapest: true, fastest: false, optimal: false },
  filter: { all: true, notransfer: true, onetransfer: true, twotransfer: true, threetransfer: true },
  error: 0,
};

export default defaultState;
