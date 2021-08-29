const ErrReducer = (state = '', action) => {
  let changedState = state;

  switch (action.type) {
    case 'ERROR':
      changedState = action.payload;
      return changedState;
    default:
      return changedState;
  }
};

export default ErrReducer;
