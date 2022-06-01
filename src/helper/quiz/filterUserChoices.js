const filterUserChoices = (options) => {
  // filter empty value options
  const filteredChoices = Object.entries(options).filter(
    (item) => item[1] !== '',
  );

  // from array entries to object
  const userChoices = filteredChoices.reduce((acc, item) => {
    acc[item[0]] = item[1];
    return acc;
  }, {});

  return userChoices;
};

export default filterUserChoices;
