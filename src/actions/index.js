export const setUser = (user) => ({
  type: 'NEW_USER',
  payload: user,
});

export const setDate = (dat) => ({
  type: 'SET_DATE',
  payload: dat,
});

export const addCoin = (coin) => ({
  type: 'CHANGE_COIN',
  payload: coin,
});
