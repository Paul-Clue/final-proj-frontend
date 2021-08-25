const FrameReducer = (state = [], action) => {
  let changedState = state;

  switch (action.type) {
    case 'GET_FRAMES':
      changedState = [...action.payload];
      return changedState;
    default:
      return changedState;
  }
};

export default FrameReducer;
