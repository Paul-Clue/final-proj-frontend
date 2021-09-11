const LoadingReducer = (state = false, action) => {
  let changedState = state;

  switch (action.type) {
    case 'LOADING':
      changedState = action.payload;
      return changedState;
    default:
      return changedState;
  }
};

export default LoadingReducer;
