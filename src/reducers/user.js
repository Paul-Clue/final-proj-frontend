const UserReducer = (state = { name: '', password: '' }, action) => {
  let changedState = state;

  switch (action.type) {
    case 'NEW_USER':
      changedState = { name: action.payload.name, password: action.payload.password };
      return changedState;
    default:
      return changedState;
  }
};

export default UserReducer;
