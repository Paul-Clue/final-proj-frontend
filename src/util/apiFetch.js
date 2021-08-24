const getData = async (url, use) => {
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

export default getData;
