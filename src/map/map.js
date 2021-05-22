const map = (array, iteratorFn) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(iteratorFn(array[i], i, array))
  }

  return result;
};

module.exports = map;