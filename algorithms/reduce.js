const reduce = (arr, reducer, init=0) => {
  if (arr.length === 0) {
    return init;
  }

  const [head, ...tail] = arr;
  return reduce(tail, reducer, reducer(init, head));
}

export default reduce;
