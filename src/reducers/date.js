const DateReducer = (state = { date: '' }, action) => {
  let changedState = state;

  switch (action.type) {
    case 'SET_DATE':
      changedState = { date: action.payload.date };
      return changedState;
    default:
      return changedState;
  }
};

export default DateReducer;
