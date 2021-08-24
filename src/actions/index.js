export const setUser = (user) => ({
  type: 'NEW_USER',
  payload: user,
});

export const changeFilter = (filt) => ({
  type: 'Change',
  payload: filt,
});

export const addCoin = (coin) => ({
  type: 'CHANGE_COIN',
  payload: coin,
});
