const ProfileReducer = (state = {}, action) => {
  let changedState = state;

  switch (action.type) {
    case 'CHANGE_FRAMES':
      changedState = action.payload;
      return changedState;
    default:
      return changedState;
  }
};

export default ProfileReducer;
