const queryBuilder = (object) => {
  let url = '';
  for (let key in object) {
    url += `${key}=${object[key]}&`;
  }

  return url.slice(0, -1);
};

export default queryBuilder;
