const UserReducer = (state = {}, action) => {
  let changedState = state;

  switch (action.type) {
    case 'NEW_USER':
      changedState = { ...action.payload };
      return changedState;
    default:
      return changedState;
  }
};

export default UserReducer;
