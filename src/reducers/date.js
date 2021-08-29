const DateReducer = (state = {}, action) => {
  let changedState = state;

  switch (action.type) {
    case 'SET_DATE':
      changedState = { ...action.payload };
      return changedState;
    default:
      return changedState;
  }
};

export default DateReducer;
