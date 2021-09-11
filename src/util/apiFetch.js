export const postData = async (url, use) => {
  const data = await fetch(url, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',//eslint-disable-line
    },
    body: JSON.stringify(use),
  });
  return data;
};

export const getData = async (url) => {
  const data = await fetch(url, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',//eslint-disable-line
    },
  });
  return data;
};

export const getData2 = async (url, date) => {
  const data = await fetch(url, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',//eslint-disable-line
    },
    body: JSON.stringify(date),
  });
  return data;
};
