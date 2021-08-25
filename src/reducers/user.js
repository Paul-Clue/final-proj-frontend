const UserReducer = (state = { name: '', password: '', user_id: '' }, action) => {
  let changedState = state;

  switch (action.type) {
    case 'NEW_USER':
      changedState = {
        name: action.payload.name, password: action.payload.password, user_id: action.payload.id,
      };
      return changedState;
    default:
      return changedState;
  }
};

export default UserReducer;
