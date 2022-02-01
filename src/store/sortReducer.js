const defaulState = {
    cheapest: true,
    fastest: false,
    optimal: false
  }
  
const sortReducer = (state = defaulState, action) => {
    switch (action.type) {
      case "CHEAPEST":
        return {cheapest: true, fastest: false, optimal: false}
      case "FASTEST":
        return {cheapest: false, fastest: true, optimal: false}
      case "OPTIMAL":
        return {cheapest: false, fastest: false, optimal: true}
      default:
        return state
    }
  }

export default sortReducer;